"use client";

import { File, FileSpreadsheet, ImageIcon, X } from "lucide-react";
import { type ChangeEvent, type DragEvent, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onValueChange?: (value: File | null) => void;
  className?: string;

  /**
   * Accepted file extensions.
   *
   * Examples:
   * ["csv", "xlsx", "xls"]
   * [".csv", ".xlsx", ".xls"]
   * ["pdf"]
   * ["jpg", "jpeg", "png"]
   */
  validFileTypes?: string[];

  /**
   * Maximum file size in MB.
   */
  maxSizeMB?: number;
}

export default function FileUpload({
  onValueChange,
  validFileTypes = ["csv", "xlsx", "xls"],
  maxSizeMB = 10,
  className,
}: FileUploadProps) {
  const [uploadState, setUploadState] = useState<{
    file: File | null;
    progress: number;
    uploading: boolean;
  }>({
    file: null,
    progress: 0,
    uploading: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const normalizedFileTypes = validFileTypes.map((type) =>
    type.replace(/^\./, "").toLowerCase(),
  );

  const accept = normalizedFileTypes.map((type) => `.${type}`).join(",");

  const getFileExtension = (fileName: string) => {
    return fileName.split(".").pop()?.toLowerCase() ?? "";
  };

  const isValidFileType = (file: File) => {
    const extension = getFileExtension(file.name);

    return normalizedFileTypes.includes(extension);
  };

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    // Validate extension
    if (!isValidFileType(file)) {
      toast.error(
        `Please upload a valid ${normalizedFileTypes
          .map((type) => type.toUpperCase())
          .join(", ")} file.`,
        {
          position: "bottom-right",
          duration: 3000,
        },
      );
      return;
    }

    // Validate size
    const maxSize = maxSizeMB * 1024 * 1024;

    if (file.size > maxSize) {
      toast.error(`File size must be less than ${maxSizeMB}MB.`, {
        position: "bottom-right",
        duration: 3000,
      });
      return;
    }

    onValueChange?.(file);

    setUploadState({
      file,
      progress: 0,
      uploading: true,
    });

    const interval = setInterval(() => {
      setUploadState((prev) => {
        const newProgress = prev.progress + 25;

        if (newProgress >= 100) {
          clearInterval(interval);

          return {
            ...prev,
            progress: 100,
            uploading: false,
          };
        }

        return {
          ...prev,
          progress: newProgress,
        };
      });
    }, 100);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0]);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFile(event.dataTransfer.files?.[0]);
  };

  const resetFile = () => {
    onValueChange?.(null);

    setUploadState({
      file: null,
      progress: 0,
      uploading: false,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getFileIcon = () => {
    if (!uploadState.file) {
      return <File className="h-5 w-5" />;
    }

    const extension = getFileExtension(uploadState.file.name);

    if (["csv", "xlsx", "xls"].includes(extension)) {
      return <FileSpreadsheet className="h-5 w-5 text-foreground" />;
    }

    if (file?.type.includes("image/")) {
      const url = URL.createObjectURL(file);
      return (
        <Image
          width={100}
          height={100}
          src={url}
          alt={file.name}
          className="w-full aspect-square overflow-hidden rounded-md text-foreground"
        />
      );
    }

    return <File className="h-5 w-5 text-foreground" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${Number.parseFloat((bytes / k ** i).toFixed(1))} ${sizes[i]}`;
  };

  const { file, progress } = uploadState;

  return (
    <div
      className={cn(
        "flex w-full max-w-xl flex-col items-center justify-center",
        className,
      )}
    >
      <div
        className="flex w-full justify-center rounded-md border border-input border-dashed px-6 py-12"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <div>
          <File
            aria-hidden
            className="mx-auto h-12 w-12 text-muted-foreground"
          />

          <div className="flex flex-wrap items-center justify-center text-center text-sm leading-6 text-muted-foreground">
            <p>Drag and drop or</p>

            <label
              className="relative cursor-pointer rounded-sm pl-1 font-medium text-secondary hover:underline hover:underline-offset-4"
              htmlFor="file-upload"
            >
              <span>choose file</span>

              <input
                ref={fileInputRef}
                accept={accept}
                className="sr-only"
                id="file-upload"
                name="file-upload"
                onChange={handleFileChange}
                type="file"
              />
            </label>

            <p className="pl-1">to upload</p>
          </div>
        </div>
      </div>

      <p className="mt-2 flex w-full justify-between text-xs leading-5 text-muted-foreground">
        <span>
          Accepted:{" "}
          {normalizedFileTypes.map((type) => type.toUpperCase()).join(", ")}
        </span>

        <span>Max. size: {maxSizeMB}MB</span>
      </p>

      {file && (
        <Card className="relative mt-8 w-full gap-4 bg-muted p-4 shadow-none">
          <Button
            aria-label="Remove"
            className="absolute top-1 right-1 text-muted-foreground hover:text-foreground"
            onClick={resetFile}
            size="icon-sm"
            type="button"
            variant="ghost"
          >
            <X aria-hidden className="h-5 w-5 shrink-0" />
          </Button>

          <div className="flex items-center space-x-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-background shadow-sm ring-1 ring-border ring-inset">
              {getFileIcon()}
            </span>

            <div>
              <p className="text-xs font-medium text-foreground">{file.name}</p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                {formatFileSize(file.size)}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Progress className="h-1.5" value={progress} />

            <span className="text-xs text-muted-foreground">{progress}%</span>
          </div>
        </Card>
      )}
    </div>
  );
}
