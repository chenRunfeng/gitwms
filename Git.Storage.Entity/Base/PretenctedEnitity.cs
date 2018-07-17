using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Git.Framework.ORM;
using System.Data;

namespace Git.Storage.Entity.Base
{
    [TableAttribute(DbName = "JooWMS", Name = "Protected", PrimaryKeyName = "ID", IsInternal = false)]
    public partial class PretenctedEnitity:BaseEntity
    {
        public PretenctedEnitity()
        {
        }
        [DataMapping(ColumnName = "ID", DbType = DbType.Int32, Length = 4, CanNull = false, DefaultValue = null, PrimaryKey = true, AutoIncrement = true, IsMap = true)]
        public Int32 ID { get; set; }

        public PretenctedEnitity IncludeID(bool flag)
        {
            if (flag && !this.ColumnList.Contains("ID"))
            {
                this.ColumnList.Add("ID");
            }
            return this;
        }

        [DataMapping(ColumnName = "OrderNum", DbType = DbType.String, Length = 50, CanNull = false, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        public string OrderNum { get; set; }

        public PretenctedEnitity IncludeOrderNum(bool flag)
        {
            if (flag && !this.ColumnList.Contains("OrderNum"))
            {
                this.ColumnList.Add("OrderNum");
            }
            return this;
        }

        [DataMapping(ColumnName = "CusNum", DbType = DbType.String, Length = 50, CanNull = false, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        public string CusNum { get; set; }

        public PretenctedEnitity IncludeCusNum(bool flag)
        {
            if (flag && !this.ColumnList.Contains("CusNum"))
            {
                this.ColumnList.Add("CusNum");
            }
            return this;
        }

        //[DataMapping(ColumnName = "Contact", DbType = DbType.String, Length = 100, CanNull = true, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        //public string Contact { get; set; }

        //public PretenctedEnitity IncludeContact(bool flag)
        //{
        //    if (flag && !this.ColumnList.Contains("Contact"))
        //    {
        //        this.ColumnList.Add("Contact");
        //    }
        //    return this;
        //}

        //[DataMapping(ColumnName = "Phone", DbType = DbType.String, Length = 50, CanNull = true, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        //public string Phone { get; set; }

        //public PretenctedEnitity IncludePhone(bool flag)
        //{
        //    if (flag && !this.ColumnList.Contains("Phone"))
        //    {
        //        this.ColumnList.Add("Phone");
        //    }
        //    return this;
        //}

        //[DataMapping(ColumnName = "Address", DbType = DbType.String, Length = 200, CanNull = true, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        //public string Address { get; set; }

        //public PretenctedEnitity IncludeAddress(bool flag)
        //{
        //    if (flag && !this.ColumnList.Contains("Address"))
        //    {
        //        this.ColumnList.Add("Address");
        //    }
        //    return this;
        //}

        //[DataMapping(ColumnName = "ContractOrder", DbType = DbType.String, Length = 50, CanNull = false, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        //public string ContractOrder { get; set; }

        //public PretenctedEnitity IncludeContractOrder(bool flag)
        //{
        //    if (flag && !this.ColumnList.Contains("ContractOrder"))
        //    {
        //        this.ColumnList.Add("ContractOrder");
        //    }
        //    return this;
        //}

        //[DataMapping(ColumnName = "Num", DbType = DbType.Double, Length = 8, CanNull = true, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        //public double Num { get; set; }

        //public PretenctedEnitity IncludeNum(bool flag)
        //{
        //    if (flag && !this.ColumnList.Contains("Num"))
        //    {
        //        this.ColumnList.Add("Num");
        //    }
        //    return this;
        //}

        //[DataMapping(ColumnName = "Amount", DbType = DbType.Double, Length = 8, CanNull = true, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        //public double Amount { get; set; }

        //public PretenctedEnitity IncludeAmount(bool flag)
        //{
        //    if (flag && !this.ColumnList.Contains("Amount"))
        //    {
        //        this.ColumnList.Add("Amount");
        //    }
        //    return this;
        //}

        //[DataMapping(ColumnName = "Weight", DbType = DbType.Double, Length = 8, CanNull = true, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        //public double Weight { get; set; }

        //public PretenctedEnitity IncludeWeight(bool flag)
        //{
        //    if (flag && !this.ColumnList.Contains("Weight"))
        //    {
        //        this.ColumnList.Add("Weight");
        //    }
        //    return this;
        //}

        [DataMapping(ColumnName = "ProtectedTime", DbType = DbType.DateTime, Length = 8, CanNull = false, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        public DateTime ProtectedTime { get; set; }

        public PretenctedEnitity IncludeProtectedTime(bool flag)
        {
            if (flag && !this.ColumnList.Contains("ProtectedTime"))
            {
                this.ColumnList.Add("ProtectedTime");
            }
            return this;
        }

        [DataMapping(ColumnName = "Status", DbType = DbType.Int32, Length = 4, CanNull = false, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        public Int32 Status { get; set; }

        public PretenctedEnitity IncludeStatus(bool flag)
        {
            if (flag && !this.ColumnList.Contains("Status"))
            {
                this.ColumnList.Add("Status");
            }
            return this;
        }
        [DataMapping(ColumnName = "Remark", DbType = DbType.String, Length = 100, CanNull = false, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        public string Remark { get; set; }
        public PretenctedEnitity IncludeRemark(bool flag)
        {
            if (flag && !this.ColumnList.Contains("Remark"))
            {
                this.ColumnList.Add("Remark");
            }
            return this;
        }

    }

    public partial class PretenctedEnitity
    {
        //[DataMapping(ColumnName = "CusName", DbType = DbType.String, Length = 100, CanNull = false, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        public string CusName { get; set; }
        //[DataMapping(ColumnName = "RemarkLevel", DbType = DbType.String, Length = 100, CanNull = false, DefaultValue = null, PrimaryKey = false, AutoIncrement = false, IsMap = true)]
        public string RemarkLevel { get; set; }
        public string strStatus { get; set; }
    }
}
