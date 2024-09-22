import { NextResponse } from 'next/server'
export const runtime = "edge";
const mockFiles = [
  { id: '1', name: 'Untitled document', type: 'document', modified: 'Sep 15, 2024', owner: 'me', location: 'My Drive', url: 'https://docs.google.com/document/d/e/2PACX-1vT7XCfK2xY5GKPtBb2MuZvakO3xbZTbzNNGqVY7W7sxMOGjPITWdqOFnkb1iGbWuQ/pub?embedded=true' },
  { id: '2', name: '24 Why Consent Should Be Removed.mp4', type: 'video', modified: 'Aug 26, 2024', owner: 'senseijizz9', location: 'Jizz vids', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  { id: '3', name: '5d14c364-6677-4054-a4f0-365b60417324.jpg', type: 'image', modified: 'Jun 14, 2024', owner: '', location: 'leakedInfoLMFAO', url: 'https://picsum.photos/800/600' },
  { id: '4', name: '....noice', type: 'document', modified: 'Sep 15, 2024', owner: 'hihuchanafara@gmail.com', location: 'Shared with me', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { id: '5', name: 'fyfrth', type: 'document', modified: 'Sep 11, 2024', owner: 'me', location: 'TrustWalletBackup', url: 'https://docs.google.com/document/d/e/2PACX-1vT7XCfK2xY5GKPtBb2MuZvakO3xbZTbzNNGqVY7W7sxMOGjPITWdqOFnkb1iGbWuQ/pub?embedded=true' },
  { id: '6', name: 'Curr Schedule', type: 'document', modified: 'Jul 11, 2024', owner: 'me', location: 'My Drive', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYFXjvZLVaGr9XJzMxMXLXWZXZNpZQJmvY7m5vUVTIEuRGNVGQIwU2Cl3P3Cx1Uw/pubhtml?widget=true&headers=false' },
  { id: '7', name: 'Instrument list_15.xlsx', type: 'document', modified: 'Jul 29, 2024', owner: 'me', location: 'My Drive', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQYFXjvZLVaGr9XJzMxMXLXWZXZNpZQJmvY7m5vUVTIEuRGNVGQIwU2Cl3P3Cx1Uw/pubhtml?widget=true&headers=false' },
  { id: '8', name: 'training_args.bin', type: 'file', modified: 'Aug 3, 2024', owner: 'me', location: 'output-medium', url: '#' },
  { id: '9', name: 'Untitled document (1).docx', type: 'document', modified: 'Jun 10, 2024', owner: 'me', location: 'My Drive', url: 'https://docs.google.com/document/d/e/2PACX-1vT7XCfK2xY5GKPtBb2MuZvakO3xbZTbzNNGqVY7W7sxMOGjPITWdqOFnkb1iGbWuQ/pub?embedded=true' },
]

export async function GET() {
  // Simulate a delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return NextResponse.json(mockFiles)
}