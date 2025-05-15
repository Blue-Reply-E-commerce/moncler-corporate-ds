export interface DocumentItem {
  title: string;
  hasDownload?: boolean;
}

export interface EditorialTextCopyBlockProps {
  /**
   * The subheading text
   */
  subheading?: string;
  /**
   * The introduction copy HTML content
   */
  introCopy?: string;
  /**
   * The main body HTML content
   */
  mainBody?: string;
  /**
   * List of documents to display
   */
  documents?: DocumentItem[];
  /**
   * Additional CSS class names
   */
  className?: string;
}

export interface EditorialTextSignatureProps {
  /**
   * The title text
   */
  title?: string;
  /**
   * The description text
   */
  description?: string;
  /**
   * The signature as HTML content (set with dangerouslySetInnerHTML)
   */
  signatureHtml?: string;
  /**
   * The signature as an image URL
   */
  signatureImage?: string;
  /**
   * Additional CSS class names
   */
  className?: string;
}
