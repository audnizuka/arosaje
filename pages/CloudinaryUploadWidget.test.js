import { render, screen, fireEvent } from '@testing-library/react';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';

describe('CloudinaryUploadWidget', () => {
    test('renders the upload button', () => {
        render(<CloudinaryUploadWidget uwConfig={{}} setPublicId={() => { }} />);
        const uploadButton = screen.getByText('Ajouter une image');
        expect(uploadButton).toBeInTheDocument();
    });

    test('calls initializeCloudinaryWidget when the upload button is clicked', () => {
        const initializeCloudinaryWidget = jest.fn();
        render(
            <CloudinaryUploadWidget
                uwConfig={{}}
                setPublicId={() => { }}
                initializeCloudinaryWidget={initializeCloudinaryWidget}
            />
        );
        const uploadButton = screen.getByText('Ajouter une image');
        fireEvent.click(uploadButton);
        expect(initializeCloudinaryWidget).toHaveBeenCalled();
    });

    test('calls setPublicId when an image is successfully uploaded', () => {
        const setPublicId = jest.fn();
        render(
            <CloudinaryUploadWidget
                uwConfig={{}}
                setPublicId={setPublicId}
            />
        );
        const uploadButton = screen.getByText('Ajouter une image');
        fireEvent.click(uploadButton);
        // Simulate a successful image upload
        const result = { event: 'success', info: { public_id: 'image123' } };
        window.cloudinary.createUploadWidget.mock.calls[0][1](null, result);
        expect(setPublicId).toHaveBeenCalledWith('image123');
    });
});