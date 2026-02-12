"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sparkles,
  BarChart3,
  Cloud,
  Github,
  FolderInput,
  Table2,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import type { WelcomeStepProps } from "@/types/expense-tracker";
import { DASHBOARD_URL } from "@/lib/constants";

export default function WelcomeStep({ onGetStarted }: WelcomeStepProps) {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="animate-in fade-in duration-500">
      <Card className="p-6 shadow-lg border-0 bg-card relative">
        <div className="absolute top-4 right-4">
          <a
            href="https://github.com/emindurmus/ai-expense-tracker-n8n"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* App Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary flex items-center justify-center shadow-lg">
            <span className="text-4xl">💸</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold text-center mb-2 text-balance">
          Track Your Expenses
        </h1>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground mb-5 text-sm text-pretty leading-relaxed">
          Upload receipts and let AI categorize them automatically
        </p>

        {/* Benefit Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-5">
          <Badge
            variant="secondary"
            className="px-3 py-1.5 text-xs font-medium bg-accent hover:bg-accent/80"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            AI-Powered
          </Badge>
          <Badge
            variant="secondary"
            className="px-3 py-1.5 text-xs font-medium bg-accent hover:bg-accent/80"
          >
            <BarChart3 className="w-3.5 h-3.5 mr-1.5" />
            Auto-Categorize
          </Badge>
          <Badge
            variant="secondary"
            className="px-3 py-1.5 text-xs font-medium bg-accent hover:bg-accent/80"
          >
            <Cloud className="w-3.5 h-3.5 mr-1.5" />
            Cloud Backup
          </Badge>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onGetStarted}
          className="w-full h-11 text-base font-medium shadow-sm"
          size="lg"
        >
          Get Started
        </Button>

        {/* Secondary Actions */}
        <div className="mt-4 space-y-2">
          <Button
            variant="outline"
            className="w-full h-10 text-sm font-normal"
            asChild
          >
            <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Dashboard
            </a>
          </Button>

          <Button
            onClick={() => setIsGuideOpen(true)}
            variant="ghost"
            className="w-full h-10 text-sm font-normal"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            View Setup Guide
          </Button>
        </div>

        <div className="mt-5 pt-4 border-t border-border">
          <div className="text-center space-y-2">
            <p className="text-xs font-medium text-foreground">
              Created by Emin Durmuş
            </p>
            <div className="flex flex-col gap-1.5 items-center">
              <a
                href="https://www.linkedin.com/in/emin-durmus/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Setup Guide Dialog */}
      <Dialog open={isGuideOpen} onOpenChange={setIsGuideOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Quick Setup Guide</DialogTitle>
            <DialogDescription>
              Follow these steps to connect your Google Drive and Sheets for
              automatic expense tracking.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Google Drive Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <FolderInput className="w-5 h-5 text-primary" />
                <span>Google Drive (Input Folder)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Upload your bank or credit card PDFs here.
              </p>
              <a
                href="https://drive.google.com/drive/u/0/folders/1A9SRkoPBwOs4A7cf26j3QomEcP5dI9Sm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <span>Drive Folder — AI Expense Tracker Inputs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-xs text-muted-foreground font-mono break-all">
                  Folder ID: 1A9SRkoPBwOs4A7cf26j3QomEcP5dI9Sm
                </p>
              </div>
            </div>

            {/* Google Sheets Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Table2 className="w-5 h-5 text-primary" />
                <span>Google Sheets (Output Dashboard)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                All parsed and categorized transactions are appended here.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/1h_xhUSolPzLiu2tuHJi6ZQ9eL529YTIR/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <span>Google Sheets Template — AI Expense Tracker</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://docs.google.com/spreadsheets/d/1h_xhUSolPzLiu2tuHJi6ZQ9eL529YTIR/copy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
              >
                <span>Make a Copy of the Template</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-xs text-muted-foreground font-mono break-all">
                  Spreadsheet ID: 1h_xhUSolPzLiu2tuHJi6ZQ9eL529YTIR
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
