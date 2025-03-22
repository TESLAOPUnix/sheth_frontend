"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Search, SortAsc, SortDesc } from "lucide-react";
import ReplyModal from "@/components/reply-modal";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

type EnquiryStatus = "new" | "opened" | "fulfilled" | "cancelled";

interface Order {
  order_id: number;
  sku?: any;
  cat_no?: any;
  quantity: number;
  product_price?: any;
}

interface Enquiry {
  cart_id: number;
  cart_status: EnquiryStatus;
  user_name: string;
  user_email: string;
  user_phone: string;
  orders: Order[];
}

const statusColors: Record<any, string> = {
  new: "bg-blue-100",
  opened: "bg-yellow-100",
  fulfilled: "bg-green-100",
  cancelled: "bg-red-100",
};

export default function EnhancedEnquiryPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Enquiry;
    direction: "asc" | "desc";
  } | null>(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState<{
    id: number | null;
    isOpen: boolean;
  }>({
    id: null,
    isOpen: false,
  });

  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Adjust limit as needed
  const [dateSort, setDateSort] = useState<string>("false");
  const [statusSort, setStatusSort] = useState<string>("");
  

  const handleReply = (enquiry: any) => {
    setSelectedEnquiry({ id: enquiry.cart_id, isOpen: true });
    console.log("Replying to:", enquiry.user_name);
  };

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/getEnquiries?page=${page}&limit=${limit}&datesort=${dateSort}&statussort=${statusSort}`
      );

      console.log("Enquiries fetched:", res);
      setEnquiries(res.data.response); // Adjusted to handle the new structure
    } catch (error) {
      console.error("Failed to fetch enquiries:", error);
    }
  };

  useEffect(() => {
    console.log("run it ")
    fetchEnquiries();
  }, [page, dateSort, statusSort]);

  const handleStatusChange = async (cartId: any, newStatus: EnquiryStatus) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/statusUpdate`,
        { status: newStatus, cart_id: cartId }
      );

      toast({
        title: "Status Updated Successfully",
      });

      setEnquiries((prevEnquiries) =>
        prevEnquiries.map((enquiry) =>
          enquiry.cart_id === cartId
            ? { ...enquiry, cart_status: newStatus }
            : enquiry
        )
      );
    } catch (error) {
      toast({
        title: "Status Failed to update.",
      });
    }
  };

  const filteredAndSortedEnquiries = useMemo(() => {
    let result = enquiries.filter(
      (enquiry) =>
        enquiry.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enquiry.user_email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [enquiries, searchTerm, sortConfig]);

  useEffect(() => {
    console.log(selectedEnquiry);
  }, [selectedEnquiry]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Enquiries</h1>
      <div className="mb-4 flex items-center space-x-2">
        {/* Search Bar */}
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search enquiries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-background"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Sort by Date */}
        <Select onValueChange={(value) => setDateSort(value)}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Sort by Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="false">Oldest First</SelectItem>
            <SelectItem value="true">Newest First</SelectItem>
          </SelectContent>
        </Select>

        {/* Sort by Status */}
        <Select onValueChange={(value) => setStatusSort(value)}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Sort by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="opened">Opened</SelectItem>
            <SelectItem value="fulfilled">Fulfilled</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedEnquiries.map((enquiry) => (
              <TableRow key={enquiry.cart_id}>
                <TableCell>{enquiry.user_name}</TableCell>
                <TableCell>
                  <ul className="list-disc pl-5 text-xs">
                    {enquiry.orders.slice(0, 2).map((order, index) => (
                      <li key={index}>
                        {order.cat_no || order.sku} ( x {order.quantity})
                      </li>
                    ))}
                    {enquiry.orders.length > 2 && <p>more...</p>}
                  </ul>
                </TableCell>
                <TableCell>{enquiry.user_phone}</TableCell>
                <TableCell>
                  <Select
                    value={enquiry.cart_status?.toLowerCase()}
                    onValueChange={(value: EnquiryStatus) =>
                      handleStatusChange(enquiry.cart_id, value)
                    }
                  >
                    <SelectTrigger
                      className={`w-[120px] ${
                        statusColors[enquiry.cart_status?.toLowerCase()]
                      }`}
                    >
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new" className={statusColors.new}>
                        New
                      </SelectItem>
                      <SelectItem
                        value="opened"
                        className={statusColors.opened}
                      >
                        Opened
                      </SelectItem>
                      <SelectItem
                        value="fulfilled"
                        className={statusColors.fulfilled}
                      >
                        Fulfilled
                      </SelectItem>
                      <SelectItem
                        value="cancelled"
                        className={statusColors.cancelled}
                      >
                        Cancelled
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    onClick={() => handleReply(enquiry)}
                  >
                    Reply
                  </Button>
                  {selectedEnquiry.isOpen && (
                    <ReplyModal
                      enquiry={enquiries.find(
                        (e) => e.cart_id === selectedEnquiry.id
                      )}
                      onClose={() =>
                        setSelectedEnquiry({ id: null, isOpen: false })
                      }
                      setEnquiries={setEnquiries}
                      isOpen={selectedEnquiry.isOpen}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 ml-auto">
        <Button className="disabled:opacity-25 bg-zinc-800" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          <ChevronLeft /> Previous
        </Button>
        <span className="text-xs">Page {page}</span>
        <Button className="bg-zinc-800" onClick={() => setPage((prev) => prev + 1)}>
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
