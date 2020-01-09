const mynodeJS = (x) => {
    console.log('--Job In Future--')
    console.log('Press your last phone number(0-9)')
    phoneS = [
        {phone:'0',massage:'nurse'},
        {phone:'1',massage:'dentist'},
        {phone:'2',massage:'driver'},
        {phone:'3',massage:'singer'},
        {phone:'4',massage:'soldier'},
        {phone:'5',massage:'teacher'},
        {phone:'6',massage:'actor'},
        {phone:'7',massage:'dancer'},
        {phone:'8',massage:'lawyer'},
        {phone:'9',massage:'pilot'}
    ]
    for(n in phoneS){
        x == phoneS[n].phone ? console.log('Your job is '+phoneS[n].massage) : ''
    }
}
mynodeJS(5); //you can edit
