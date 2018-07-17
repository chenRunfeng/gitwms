using Git.Framework.DataTypes;
using Git.Storage.Entity.Store;
using Git.Storage.Entity.Base;
using Git.Framework.DataTypes.ExtensionMethods;
using Git.Framework.ORM;
using Git.Framework.Log;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Git.Storage.Common;

namespace Git.Storage.Provider.Base
{
    public  class PretenctedProvider:DataFactory
    {
        private Log log = Log.Instance(typeof(AdminProvider));

        public PretenctedProvider() { }
        /// <summary>
        /// 查询用户管理员分页
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="pageInfo"></param>
        /// <returns></returns>
        public List<PretenctedEnitity> GetList(PretenctedEnitity entity)
        {
            //entity.IncludeAll();
            entity.OrderBy(a => a.ProtectedTime, EOrderBy.DESC);
            //CustomerEntity roleEntity = new CustomerEntity();
            //roleEntity.Include("CusName", "RemarkLevel");
            //entity.Left<CustomerEntity>(roleEntity, new Params<string, string>() { Item1 = "CusName", Item2 = "RemarkLevel" });
            List<PretenctedEnitity> listResult = this.Pretencted.GetList(entity);
            return listResult;
        }
        /// <summary>
        /// 添加维护记录
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public int Add(PretenctedEnitity entity)
        {
            entity.Status = 0;
            //entity.= DateTime.Now;
            //entity.ParentCode = "";
            entity.IncludeAll();
            int line = this.Pretencted.Add(entity);
            return line;
        }
        /// <summary>
        /// 根据Id查询记录
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public PretenctedEnitity GetEnitityById(int id)
        {
            PretenctedEnitity pretencted= this.Pretencted.GetSingle(id);
            return pretencted;
        }
    }
}
