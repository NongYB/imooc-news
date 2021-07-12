//时间格式化
export const parseTime=(tiem)=>{
	const format='{y}-{m}-{d} {h}:{i}:{s}'
	let date=null
	if(typeof time ==='string'){
		tiem=parseInt(tiem)
	}
	date=new Date(tiem)
	const formatObj={
		y:date.getFullYear(),
		m:date.getMonth()+1,
		d:date.getDate(),
		h:date.getHours(),
		i:date.getMinutes(),
		s:date.getSeconds()
	}
	
	const strTime=format.replace(/{(y|m|d|h|i|s)+}/g,(result,key)=>{
		let value=formatObj[key]
		if(result.length>0 && value<10){
			value='0'+value
		}
		return value
	})
	return strTime
}