
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, FileIcon, Star } from 'lucide-react';

export interface DownloadCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  fileSize: string;
  downloads: number;
  rating: number;
  date: string;
  imageUrl?: string;
}

const DownloadCard = ({
  title,
  description,
  category,
  fileSize,
  downloads,
  rating,
  date,
  imageUrl
}: DownloadCardProps) => {
  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
            {category}
          </Badge>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
        <h3 className="font-semibold text-lg mt-2">{title}</h3>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <FileIcon className="h-3 w-3" />
            <span>{fileSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            <span>{downloads.toLocaleString()} downloads</span>
          </div>
          <div>{date}</div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
          <Download className="mr-2 h-4 w-4" /> Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DownloadCard;
