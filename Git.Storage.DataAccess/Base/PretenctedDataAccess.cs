using Git.Framework.MsSql;
using Git.Storage.Entity.Base;
using Git.Storage.IDataAccess.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Git.Storage.DataAccess.Base
{
    public class PretenctedDataAccess : DbHelper<PretenctedEnitity>, IPretencted
    {

    }
}
