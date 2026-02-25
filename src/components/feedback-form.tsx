"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageSquare, Send, CheckCircle2, Loader2 } from "lucide-react";

interface FeedbackFormProps {
  context?: "general" | "chapter" | "firm";
  chapterNumber?: number;
  chapterTitle?: string;
  firmId?: string;
  firmName?: string;
  trigger?: React.ReactNode;
}

export function FeedbackForm({
  context = "general",
  chapterNumber,
  chapterTitle,
  firmId,
  firmName,
  trigger,
}: FeedbackFormProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [feedbackType, setFeedbackType] = useState(
    context === "chapter" ? "Chapter" : context === "firm" ? "Firm" : "General"
  );
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmit = async () => {
    if (!feedbackText.trim()) {
      setError("Please enter your feedback");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedbackType,
          relatedChapter: chapterNumber,
          relatedFirmId: firmId,
          userName: userName || null,
          userEmail: userEmail || null,
          feedbackText,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
          setFeedbackText("");
          setUserName("");
          setUserEmail("");
        }, 2000);
      } else {
        setError("Failed to submit feedback. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const defaultTrigger = (
    <Button variant="outline" className="gap-2 rounded-xl">
      <MessageSquare className="h-4 w-4" />
      Feedback
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Share Your Feedback
          </DialogTitle>
          <DialogDescription>
            Help improve this platform with your suggestions, corrections, or ideas.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="h-12 w-12 mx-auto text-emerald-500 mb-4" />
            <p className="text-lg font-medium text-neutral-900">Thank you!</p>
            <p className="text-sm text-neutral-600">Your feedback has been submitted.</p>
          </div>
        ) : (
          <div className="space-y-4 pt-4">
            {/* Context Info */}
            {(chapterTitle || firmName) && (
              <div className="p-3 bg-neutral-50 rounded-lg text-sm">
                {chapterTitle && (
                  <p className="text-neutral-600">
                    <span className="font-medium">Chapter {chapterNumber}:</span> {chapterTitle}
                  </p>
                )}
                {firmName && (
                  <p className="text-neutral-600">
                    <span className="font-medium">Firm:</span> {firmName}
                  </p>
                )}
              </div>
            )}

            {/* Feedback Type */}
            <div className="space-y-2">
              <Label htmlFor="type" className="text-sm">Feedback Type</Label>
              <Select value={feedbackType} onValueChange={setFeedbackType}>
                <SelectTrigger id="type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="General">General Feedback</SelectItem>
                  <SelectItem value="Chapter">Chapter Content</SelectItem>
                  <SelectItem value="Firm">Firm Information</SelectItem>
                  <SelectItem value="Bug">Bug Report</SelectItem>
                  <SelectItem value="Suggestion">Feature Suggestion</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name & Email (Optional) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-neutral-500">Name (Optional)</Label>
                <Input
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your name"
                  className="h-9"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-neutral-500">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-9"
                />
              </div>
            </div>

            {/* Feedback Text */}
            <div className="space-y-2">
              <Label htmlFor="feedback" className="text-sm">Your Feedback *</Label>
              <Textarea
                id="feedback"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Share your thoughts, suggestions, or report issues..."
                rows={4}
                className="resize-none"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={loading || !feedbackText.trim()}
              className="w-full gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Feedback
                </>
              )}
            </Button>

            <p className="text-xs text-neutral-400 text-center">
              Your feedback helps improve this platform for everyone.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default FeedbackForm;
