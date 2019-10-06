export const uniq = arr => {
	return arr.filter((val,i,self) => self.indexOf(val) === i)
}