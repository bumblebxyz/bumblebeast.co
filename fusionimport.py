import adsk.core, adsk.fusion, traceback

def run(context):
    ui = None 
    try:
        app = adsk.core.Application.get()
        ui = app.userInterface

        # Create a new file by importing the existing file.        
        f3dImportOptions = app.importManager.createFusionArchiveImportOptions('C:\Temp\Pistons.f3d')
        newDoc = app.importManager.importToNewDocument(f3dImportOptions)

        # Find the project to save it to by name.
        proj = adsk.core.DataProject.cast(None)
        for checkProj in app.data.dataProjects:
            if checkProj.name == 'Junk':
                proj = checkProj
                break

        # Get the root folder of the project. 
        folder = proj.rootFolder

        # If you need to save it in another folder you can use this
        # to get it by name.           
        folder = folder.dataFolders.itemByName('Samples')

        newDoc.saveAs('NewPiston', folder, '', '')            
    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))