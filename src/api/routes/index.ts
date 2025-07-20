export const setRoutes = (app) => {
    const ClaimsController = require('../controllers/claimsController').ClaimsController;
    const DocumentsController = require('../controllers/documentsController').DocumentsController;

    const claimsController = new ClaimsController();
    const documentsController = new DocumentsController();

    app.post('/claims', claimsController.createClaim.bind(claimsController));
    app.get('/claims/:id', claimsController.getClaim.bind(claimsController));
    app.put('/claims/:id', claimsController.updateClaim.bind(claimsController));

    app.post('/documents', documentsController.uploadDocument.bind(documentsController));
    app.get('/documents/:id', documentsController.getDocument.bind(documentsController));
    app.delete('/documents/:id', documentsController.deleteDocument.bind(documentsController));
};