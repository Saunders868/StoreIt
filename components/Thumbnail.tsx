import { cn, getFileIcon } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  type: string;
  extension: string;
  url?: string;
  imageClassName?: string;
  className?: string;
}

const Thumbnail = ({
  type,
  extension,
  url = "",
  imageClassName,
  className,
}: Props) => {
  const isImg = type === "image" && extension != "svg";
  return (
    <figure className={cn("thumbnail", className)}>
      <Image
        src={isImg ? url : getFileIcon(extension, type)}
        alt="thumbnail"
        width={100}
        height={100}
        className={cn(
          "size-8 object-contain",
          imageClassName,
          isImg && "thumbnail-image"
        )}
      />
    </figure>
  );
};

export default Thumbnail;
