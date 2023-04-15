const Filter = (props) => {
    return ( 
        <div className="filter">
            <div className="result">
                تعداد محصولات: {props.count}
            </div>
            <div className="sort">
                <div className="sort-title">مرتب سازی براساس :</div>
                <div className="form-chekbox">
                    <div className="form-group">
                        <input type="radio" value='asc' name="radiovalue" onChange={props.sortProduct}/>
                        <label htmlFor="">جدید ترین محصولات</label>
                    </div>
                    <div className="form-group">
                        <input type="radio" value='desc' name="radiovalue" onChange={props.sortProduct}/>
                        <label htmlFor="">قدیمی ترین محصولات</label>
                    </div>
                </div>

            </div>
            <div className="brand">
                <span>انتخاب برند</span>
                <select onChange={props.sortBrand}>
                        <option value="">همه</option>
                        <option value="samsung">سامسونگ</option>
                        <option value="iphone">ایفون</option>
                        <option value="motorola">موتورولا</option>
                        <option value="blackberry">بلک یری</option>
                        <option value="lg">ال جی</option>
                        <option value="sony">سونی</option>
                </select>
            </div>
        </div>
     );
}
 
export default Filter;