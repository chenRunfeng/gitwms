using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace Git.Storage.Common
{
    public enum ECusType
    {
        /// <summary>
        /// 合作客户
        /// </summary>
        [Description("直销")]
        Cooperation = 1,

        /// <summary>
        /// 潜在客户
        /// </summary>
        [Description("渠道")]
        Potential = 2,

        /// <summary>
        /// 丢失客户
        /// </summary>
        [Description("公司/个人")]
        Lost = 3,

        ///// <summary>
        ///// 虚拟客户
        ///// </summary>
        //[Description("虚拟客户")]
        //Invented = 4
    }
}
