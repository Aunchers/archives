import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
interface File {
  id: string
  name: string
  type: string
  modified: string
  owner: string
  location: string
  url: string
}

interface FileViewerProps {
  file: File
  onClose: () => void
}

const FileViewer: React.FC<FileViewerProps> = ({ file, onClose }) => {
  const renderContent = () => {
    switch (file.type) {
      case 'image':
        return <img src={file.url} alt={file.name} className="max-w-full max-h-[80vh] object-contain" />
      case 'video':
        return (
          <video controls className="max-w-full max-h-[80vh]">
            <source src={file.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      case 'audio':
        return (
          <audio controls className="w-full">
            <source src={file.url} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        )
      case 'document':
        return (
          <iframe src={file.url} title={file.name} className="w-full h-[80vh] border-none" />
        )
      default:
        return <p>This file type is not supported for preview.</p>
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{file.name}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default FileViewer