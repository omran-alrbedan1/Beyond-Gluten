import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface FileUploadProps {
  id?: string;
  accept?: string;
  maxSizeMB?: number;
  onFileChange: (file: File | null) => void;
  selectedFile?: File | null;
  className?: string;
  label?: string;
}

export default function FileUpload({
  id = 'file-upload',
  accept = 'image/*',
  maxSizeMB = 5,
  onFileChange,
  selectedFile,
  className = '',
  label,
}: FileUploadProps) {
  const t = useTranslations('customDesign');
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Use translated label or fallback to provided label
  const uploadLabel = label || t('fileUpload.uploadLabel');

  const validateFile = (file: File): boolean => {
    // Validate file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(t('fileUpload.sizeError', { size: maxSizeMB }));
      return false;
    }
    
    // Validate file type
    const validTypes = accept.split(',').map(type => type.trim());
    const fileType = file.type;
    const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
    
    const isValidType = validTypes.some(type => {
      if (type.includes('/*')) {
        const mainType = type.split('/')[0];
        return fileType.startsWith(mainType);
      }
      return fileType === type || fileExtension === type;
    });
    
    if (!isValidType) {
      setError(t('fileUpload.typeError', { types: accept }));
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!validateFile(file)) {
        e.target.value = '';
        onFileChange(null);
        return;
      }
      
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
      
      onFileChange(file);
    } else {
      onFileChange(null);
      setPreview(null);
      setError(null);
    }
  };

  const handleRemove = () => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) input.value = '';
    onFileChange(null);
    setPreview(null);
    setError(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (!validateFile(file)) {
        return;
      }
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
      onFileChange(file);
    }
  };

  return (
    <div className={`space-y-2 sm:space-y-3 ${className}`}>
      <div
        className={`relative border-2 border-dashed rounded-lg sm:rounded-xl transition-all duration-200 ${
          isDragging 
            ? 'border-[#E6C687] bg-[#E6C687]/5 scale-[0.99]' 
            : 'border-gray-300 hover:border-[#E6C687] hover:bg-gray-50'
        } ${error ? 'border-red-500 bg-red-50' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="region"
        aria-label={"File upload area"}
      >
        <input
          id={id}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
          aria-describedby={error ? `${id}-error` : undefined}
        />
        
        {preview ? (
          <div className="relative group">
            <img
              src={preview}
              alt={t('fileUpload.previewAlt') || "Upload preview"}
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg sm:rounded-xl transition-all duration-200"
              loading="lazy"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 sm:p-2 transition-all duration-200 shadow-lg hover:scale-110 active:scale-95"
              aria-label={t('fileUpload.removeImage') || "Remove image"}
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        ) : (
          <label
            htmlFor={id}
            className="flex flex-col items-center justify-center cursor-pointer py-6 sm:py-8 md:py-10 px-4 transition-all duration-200 hover:opacity-80"
            onDragOver={handleDragOver}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#E6C687]/10 flex items-center justify-center mb-3 sm:mb-4 transition-all duration-200 group-hover:scale-105">
              <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-[#E6C687]" />
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-700 mb-1 text-center">
              {uploadLabel}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              {t('fileUpload.dragDropText') || "Drag & drop or click to upload"}
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400 mt-2 text-center">
              {t('fileUpload.maxSizeText', { size: maxSizeMB }) || `Max size: ${maxSizeMB}MB`}
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400 mt-1 text-center">
              {accept === 'image/*' ? 'Supported: JPG, PNG, GIF, WebP' : `Supported: ${accept}`}
            </p>
          </label>
        )}
      </div>
      
      {/* Error message */}
      {error && (
        <div 
          id={`${id}-error`}
          className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg sm:rounded-xl animate-in fade-in duration-200"
          role="alert"
        >
          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-red-700 flex-1">
            {error}
          </span>
          <button
            type="button"
            onClick={() => setError(null)}
            className="text-red-500 hover:text-red-700 transition-colors"
            aria-label="Dismiss error"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
      
      {/* Selected file info (for non-image files) */}
      {selectedFile && !preview && (
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg sm:rounded-xl animate-in fade-in duration-200">
          <div className="flex items-center gap-2 flex-1 w-full xs:w-auto">
            <ImageIcon className="w-4 h-4 text-[#E6C687] flex-shrink-0" />
            <span className="text-xs sm:text-sm text-green-700 break-all flex-1">
              {selectedFile.name}
            </span>
          </div>
          <div className="flex items-center gap-2 w-full xs:w-auto justify-between xs:justify-end">
            <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </span>
            <button
              type="button"
              onClick={handleRemove}
              className="text-[#E6C687] hover:text-[#b8956f] transition-all duration-200 hover:scale-110 active:scale-95 p-1"
              aria-label={t('fileUpload.removeFile') || "Remove file"}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}