exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            if (mod.clientInterface.arch == 'x64') return;
            if (mod.majorPatchVersion >= 85)
            {
                mod.warn('Mod disabled due to incompatibility with current patch. Wait for an update by the developer.');
                return;
            }
            installer.gpk("S1UI_ServantStorageWindow.gpk");
        };
    }
}
