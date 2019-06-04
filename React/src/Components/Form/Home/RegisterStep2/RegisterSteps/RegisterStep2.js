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
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({file: this.props.file});
    }

    state = {
        file: [],
        error: false,
        allow_next: false
    }

    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    onUpload = () => {
        console.log("HAS BEEN UPLOADED");
    }

    handleChange = (file) => {
        if (file.size !== null){
            this.props.handleChange("file", file);
        }
    }

    onFileRemove = () => {
        console.log("remove file");
    }

    onAddFile = (error, file) => {
        if (error) {
            this.setState({error: true});
        } else {
            if (this.state.error) {
                this.setState({error: false});
            }
        }
    }

    render() {
        return (
            <div class="col">
                <div className="row no-gutterr">
                    <Fade>
                        <h1>Foto uploaden</h1>
                    </Fade>
                </div>
                
                <div class="row no-gutterr">
                    <FilePond
                        ref={ref => (this.pond = ref)}
                        files={this.props.file}
                        allowMultiple={false}
                        allowFileTypeValidation={true}
                        allowImageValidateSize={true}
                        allowFileSizeValidation={true}
                        maxFileSize={"1MB"}
                        required={true}
                        imageValidateSizeMinWidth={300}
                        imageValidateSizeMaxWidth={800}
                        imageValidateSizeMinHeight={300}
                        imageValidateSizeMaxHeight={800}
                        imageValidateSizeLabelFormatError=""
                        imageValidateSizeLabelImageSizeTooSmall="Foto is te klein"
                        imageValidateSizeLabelImageSizeTooBig="Foto is te groot"
                        imageValidateSizeLabelExpectedMinSize="Minimum afmeting is {minWidth} × {minHeight}"
                        imageValidateSizeLabelExpectedMaxSize="Maximum afmeting is {maxWidth} × {maxHeight}"
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
                                file: fileItems.map(fileItem => fileItem.file),
                                hasUploaded: true
                            }, () => this.handleChange(fileItems.map(fileItem => fileItem.file)));
                            
                        }}
                        onaddfile={this.onAddFile}
                        onremovefile={this.onFileRemove}
                    />
                </div>

                {this.state.file.length > 0 && !this.state.error && <Fade><div class="row no-gutterr"><p>Het geuploade bestand lijkt geldig te zijn. U kunt door naar de volgende stap om de registratieproces af te ronden.</p></div></Fade>}
            </div>
        );
    }
}

export default RegisterStep2;
