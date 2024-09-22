import { File, FileText, Image, Video, Music, Folder } from 'lucide-react'

type FileIconProps = {
  type: 'folder' | 'image' | 'video' | 'audio' | 'document' | 'default'
  className?: string
}

const FileIcon = ({ type, className = '' }: FileIconProps) => {
  switch (type) {
    case 'folder':
      return <Folder className={`text-blue-500 ${className}`} />
    case 'image':
      return <Image className={`text-green-500 ${className}`} />
    case 'video':
      return <Video className={`text-red-500 ${className}`} />
    case 'audio':
      return <Music className={`text-purple-500 ${className}`} />
    case 'document':
      return <FileText className={`text-yellow-500 ${className}`} />
    default:
      return <File className={`text-gray-500 ${className}`} />
  }
}

export default FileIcon
