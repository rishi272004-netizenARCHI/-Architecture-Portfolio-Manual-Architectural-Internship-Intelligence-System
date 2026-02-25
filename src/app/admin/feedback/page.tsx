"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquare,
  LogOut,
  Building2,
  Loader2,
  Clock,
  User,
  Mail,
  FileText,
  AlertCircle,
  Lightbulb,
  Bug,
  Building,
  BookOpen,
  RefreshCw,
} from "lucide-react";

interface Feedback {
  id: string;
  feedbackType: string;
  relatedVolume: number | null;
  relatedChapter: number | null;
  relatedFirmId: string | null;
  userName: string | null;
  userEmail: string | null;
  feedbackText: string;
  status: string;
  adminNotes: string | null;
  createdAt: string;
}

const typeIcons: Record<string, React.ReactNode> = {
  General: <MessageSquare className="h-4 w-4" />,
  Chapter: <BookOpen className="h-4 w-4" />,
  Firm: <Building className="h-4 w-4" />,
  Bug: <Bug className="h-4 w-4" />,
  Suggestion: <Lightbulb className="h-4 w-4" />,
};

const statusColors: Record<string, string> = {
  New: "bg-blue-100 text-blue-700",
  Read: "bg-neutral-100 text-neutral-700",
  Resolved: "bg-emerald-100 text-emerald-700",
  Archived: "bg-neutral-100 text-neutral-500",
};

export default function AdminFeedbackPage() {
  const router = useRouter();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [updating, setUpdating] = useState<string | null>(null);

  // Check auth
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      router.push("/admin/login");
    }
  }, [router]);

  // Fetch feedbacks
  useEffect(() => {
    fetchFeedbacks();
  }, [filterType, filterStatus]);

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterType !== "all") params.append("type", filterType);
      if (filterStatus !== "all") params.append("status", filterStatus);

      const response = await fetch(`/api/feedback?${params}`);
      const data = await response.json();
      setFeedbacks(data.feedbacks || []);
    } catch (error) {
      console.error("Failed to fetch feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    setUpdating(id);
    try {
      await fetch(`/api/feedback/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      setFeedbacks((prev) =>
        prev.map((f) => (f.id === id ? { ...f, status } : f))
      );
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      setUpdating(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminEmail");
    router.push("/admin/login");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-neutral-900">Admin Dashboard</h1>
                <p className="text-xs text-neutral-500">Feedback Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={fetchFeedbacks}
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="gap-2 text-neutral-600"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-neutral-200 p-4">
            <p className="text-2xl font-semibold">{feedbacks.length}</p>
            <p className="text-sm text-neutral-500">Total Feedback</p>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-4">
            <p className="text-2xl font-semibold text-blue-600">
              {feedbacks.filter((f) => f.status === "New").length}
            </p>
            <p className="text-sm text-neutral-500">New</p>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-4">
            <p className="text-2xl font-semibold text-neutral-600">
              {feedbacks.filter((f) => f.status === "Read").length}
            </p>
            <p className="text-sm text-neutral-500">Read</p>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-4">
            <p className="text-2xl font-semibold text-emerald-600">
              {feedbacks.filter((f) => f.status === "Resolved").length}
            </p>
            <p className="text-sm text-neutral-500">Resolved</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="General">General</SelectItem>
              <SelectItem value="Chapter">Chapter</SelectItem>
              <SelectItem value="Firm">Firm</SelectItem>
              <SelectItem value="Bug">Bug Report</SelectItem>
              <SelectItem value="Suggestion">Suggestion</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Read">Read</SelectItem>
              <SelectItem value="Resolved">Resolved</SelectItem>
              <SelectItem value="Archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Feedback List */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-neutral-400" />
          </div>
        ) : feedbacks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-neutral-200">
            <MessageSquare className="h-12 w-12 mx-auto text-neutral-300 mb-4" />
            <p className="text-neutral-500">No feedback found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="bg-white rounded-xl border border-neutral-200 p-5 sm:p-6"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                      {typeIcons[feedback.feedbackType] || (
                        <FileText className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{feedback.feedbackType}</span>
                        <Badge className={statusColors[feedback.status] || ""}>
                          {feedback.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                        <Clock className="h-3 w-3" />
                        {formatDate(feedback.createdAt)}
                      </div>
                    </div>
                  </div>

                  {/* Status Actions */}
                  <div className="flex gap-2">
                    {feedback.status === "New" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(feedback.id, "Read")}
                        disabled={updating === feedback.id}
                      >
                        Mark Read
                      </Button>
                    )}
                    {feedback.status === "Read" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(feedback.id, "Resolved")}
                        disabled={updating === feedback.id}
                      >
                        Resolve
                      </Button>
                    )}
                    {(feedback.status === "Read" || feedback.status === "Resolved") && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => updateStatus(feedback.id, "New")}
                        disabled={updating === feedback.id}
                      >
                        Reopen
                      </Button>
                    )}
                  </div>
                </div>

                {/* Context */}
                {(feedback.relatedChapter || feedback.relatedFirmId) && (
                  <div className="mb-3 p-2 bg-neutral-50 rounded-lg text-sm text-neutral-600">
                    {feedback.relatedChapter && (
                      <span>Chapter {feedback.relatedChapter}</span>
                    )}
                    {feedback.relatedFirmId && <span>Firm: {feedback.relatedFirmId}</span>}
                  </div>
                )}

                {/* Feedback Text */}
                <p className="text-neutral-700 leading-relaxed whitespace-pre-wrap">
                  {feedback.feedbackText}
                </p>

                {/* User Info */}
                {(feedback.userName || feedback.userEmail) && (
                  <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-4 text-sm text-neutral-500">
                    {feedback.userName && (
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" />
                        {feedback.userName}
                      </div>
                    )}
                    {feedback.userEmail && (
                      <div className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" />
                        <a
                          href={`mailto:${feedback.userEmail}`}
                          className="hover:text-neutral-900"
                        >
                          {feedback.userEmail}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-neutral-500">
            Admin Dashboard • Architecture Internship Portfolio Manual
          </p>
        </div>
      </footer>
    </div>
  );
}
