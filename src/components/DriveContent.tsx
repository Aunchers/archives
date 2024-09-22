"use client"

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import FileIcon from '@/components/FileIcon'
import FileViewer from '@/components/FileViewer'
type FileType = 'folder' | 'image' | 'video' | 'audio' | 'document' | 'default'

interface File {
  id: string
  name: string
  owner: string
  modified: string
  location: string
  type: FileType
  url: string
}

export default function DriveContent() {
  const [files, setFiles] = useState<File[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useEffect(() => {
    fetchFiles()
  }, [])

  const fetchFiles = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/files')
      const data = await response.json()
      setFiles(data)
    } catch (error) {
      console.error('Error fetching files:', error)
    }
    setLoading(false)
  }

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleFileClick = (file: File) => {
    setSelectedFile(file)
  }

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <Search className="w-5 h-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search in Drive"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
      </div>

      <div className="flex space-x-2 mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="document">Document</SelectItem>
            <SelectItem value="folder">Folder</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="People" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="me">Me</SelectItem>
            <SelectItem value="shared">Shared with me</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Modified" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This week</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All locations</SelectItem>
            <SelectItem value="drive">My Drive</SelectItem>
            <SelectItem value="shared">Shared with me</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Last modified</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFiles.map((file) => (
              <TableRow key={file.id} onClick={() => handleFileClick(file)} className="cursor-pointer hover:bg-gray-100">
                <TableCell className="flex items-center">
                  <FileIcon type={file.type} className="mr-2" />
                  {file.name}
                </TableCell>
                <TableCell>{file.owner}</TableCell>
                <TableCell>{file.modified}</TableCell>
                <TableCell>{file.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {selectedFile && (
        <FileViewer file={selectedFile} onClose={() => setSelectedFile(null)} />
      )}
    </div>
  )
}