import React, { Component , useState } from 'react';
import Fade from 'react-reveal/Fade';

import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, 
    FilePondPluginImagePreview, 
    FilePondPluginFileValidateType, 
    FilePondPluginImageCrop, 
    FilePondPluginImageValidateSize,
    FilePondPluginImageResize,
    FilePondPluginImageTransform,
    FilePondPluginImageEdit
);

class RegisterStep2 extends Component {
    
    state = {
        // Set initial files, type 'local' means this is a file
        // that has already been uploaded to the server (see docs)
        files: [],
        hasUploaded: false
    }

    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    onUpload = () => {
        console.log("HAS BEEN UPLOADED");
    }

    render() {
        // const [files, setFiles] = useState([]);
        return (
            <div class="col">
                <div class="row no-gutterr">
                    <Fade>
                        <h1>Foto uploaden</h1>
                    </Fade>
                </div>
                

                {/* <FilePond
                    files={this.state.files}
                    allowMultiple={true}
                    onupdatefiles={this.setState}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                /> */}
                <div class="row no-gutterr">
                    <FilePond
                        ref={ref => (this.pond = ref)}
                        files={this.state.files}
                        allowMultiple={false}
                        allowFileTypeValidation={true}
                        allowImageCrop={true}
                        allowImageValidateSize={true}
                        acceptedFileTypes={['image/png', 'image/jpeg']}
                        labelFileTypeNotAllowed="Bestandtype is ongeldig "
                        fileValidateTypeLabelExpectedTypes="Verwacht {allButLastType} of {lastType}"
                        labelIdle="Sleep hier een bestand of <span class='filepond--label-action'> Blader </span>"
                        labelInvalidField="Ongeldige bestand gegeven"
                        labelFileWaitingForSize="Aan het wachten op grootte"
                        labelFileSizeNotAvailable="Grootte niet beschikbaar"
                        labelFileLoading="Aan het laden"
                        labelFileLoadError="Error tijdens het laden"
                        labelFileProcessing="Aan het uploaden"
                        labelFileProcessingComplete="Bestand is geupload"
                        labelFileProcessingAborted="Upload is geannuleerd"
                        labelFileProcessingError="Er is iets mis gegaan tijds de upload"
                        labelFileProcessingRevertError="Error tijdens het annuleren"
                        labelFileRemoveError="Probleem met het verwijderen"
                        labelTapToCancel="klik om te annuleren"
                        labelTapToRetry="klik om opnieuw te proberen"
                        labelTapToUndo="klik om ongedaan te maken"
                        labelButtonRemoveItem="Verwijderen"
                        labelButtonAbortItemLoad="Stoppen"
                        labelButtonRetryItemLoad="Opnieuw proberen"
                        labelButtonAbortItemProcessing="Annuleren"
                        labelButtonUndoItemProcessing="Ongedaan maken"
                        labelButtonRetryItemProcessing="Opnieuw proberen"
                        labelButtonProcessItem="Uploaden"
                        server="https://api.aceofclubs.nl/api/acecard"
                        instantUpload={false}
                        oninit={() => this.handleInit()}
                        onupdatefiles={fileItems => {
                            // Set currently active file objects to this.state
                            this.setState({
                                files: fileItems.map(fileItem => fileItem.file),
                                hasUploaded: true
                            });
                        }}
                        onprocessfile={console.log("LEL has been added")}
                    />
                </div>
            </div>
        );
    }
}

export default RegisterStep2;
