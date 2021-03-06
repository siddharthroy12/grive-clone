import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import AddFileButton from './AddFileButton'
import FolderBreadCrumbs from './FolderBreadCrumbs'
import { useFolder } from '../../hooks/useFolder'
import Folder from './Folder'
import File from './File'
import { useParams } from 'react-router-dom'

export default function Dashboard() {

    const { folderId } = useParams()
    const { folder, childFolders, childFiles } = useFolder(folderId)

    return (
        <div>
            <Navbar />
            <Container fluid className="mt-3">
                <div className="d-flex align-items-center">
                    <FolderBreadCrumbs currentFolder={folder} />
                    <AddFileButton currentFolder={folder}/>
                    <AddFolderButton currentFolder={folder}/>
                </div>
                {childFolders.length > 0 && (
                    <div className="d-flex flex-wrap mt-3">
                        {childFolders.map(childFolder => (
                            <div key={childFolder.id} style={{maxWidth: '250px'}}
                                className='p2 m-1'>
                                    <Folder folder={childFolder}/>
                            </div>
                        ))}
                    </div>
                )}
                {childFiles.length > 0 && (
                    <div className="d-flex flex-wrap mt-3">
                        {childFiles.map(childFile => (
                            <div key={childFile.id} style={{maxWidth: '250px'}}
                                className='p2 m-1'>
                                    <File file={childFile}/>
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}
