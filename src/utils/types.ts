interface Margin {
    top: number;
    left: number;
    right: number;
    bottom?: number;
  }
  
  interface Styles {
    font?: string;
    fontStyle?: string;
    fontSize?: number;
    overflow?: string;
    lineColor?: number[];
    lineWidth?: number;
  }
  
  interface CellStyles extends Styles {
    valign?: string;
  }
  
  interface HeadStyles extends Styles {
    halign?: string;
    cellWidth?: string | number;
  }
  
  interface ColumnStyles {
    [key: number]: { cellWidth?: number, halign?: string };
  }
  
  interface AutoTableOptions {
    head: string[][];
    body: (string | number)[][];
    startY?: number;
    startX?: number;
    margin?: Margin;
    didDrawPage?: (data: any) => void;
    bodyStyles?: CellStyles;
    styles?: Styles;
    headStyles?: HeadStyles;
    columnStyles?: ColumnStyles;
    pageBreak?: string;
    addPageContent?: (data: any) => void;
    drawCell?: (cell: any, data: any) => void;
    didParseCell?: (data: any) => void;
  }
  
export interface PdfDoc {
    setLineWidth: (width: number) => void;
    setDrawColor: (r: number, g?: number, b?: number, colorSpace?: string) => void;
    setFillColor: (r: number, g?: number, b?: number, colorSpace?: string) => void;
    addImage: (imageData: string | HTMLImageElement | Uint8Array, format: string, x: number, y: number, width: number, height: number, alias?: string, compression?: string, rotation?: number) => void;
    setFont: (fontName: string, fontStyle?: string) => void;
    setFontSize: (size: number) => void;
    text: (text: string | string[], x: number, y: number, options?: any) => void;
    save: (filename: string, options?: any) => void;
    output: (type: string) => BlobPart;
    autoTable: (options: AutoTableOptions) => void;
    internal: {
      pageSize: {
        height: number;
      };
      getNumberOfPages: () => number;
      getCurrentPageInfo: () => { pageNumber: number };
    };
    addPage: () => void;
    putTotalPages?: (totalPages: string) => void;
    loadLogo?: () => void;
    addHeader?: (logo: Uint8Array) => void;
  }


export interface InventoryMovement {
  created_by: string;
  id: number;
  identifier: string;
  movment_type: string;
  origin_branch: string;
  products: number;
  status: string;
  units: number;
  updated_at: string;
}
  