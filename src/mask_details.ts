class PersonalInfoMasker 
{
  public maskPII(s: string): string 
  {
    if (s.includes('@')) 
    {
      return this.maskEmail(s);
    } 
    else 
    {
      return this.maskPhone(s);
    }
  }
  private maskEmail(email: string): string 
  {
    const [name, domain] = email.toLowerCase().split('@');
    const maskedName = name[0] + '*****' + name[name.length - 1];
    return `${maskedName}@${domain}`;
  }
  private maskPhone(phone: string): string 
  {
    const digits: string = phone.replace(/\D/g, ''); 
    const local: string = digits.slice(-10);         
    const countryCodeLength: number = digits.length - 10;
    let countryPrefix: string = '';
    if (countryCodeLength > 0) 
    {
      countryPrefix = '+' + '*'.repeat(countryCodeLength) + '-';
    }
    return `${countryPrefix}***-***-${local.slice(-4)}`;
  }
}
const masker = new PersonalInfoMasker();
console.log(masker.maskPII("LeetCode@LeetCode.com")); 
console.log(masker.maskPII("AB@qq.com"));             
console.log(masker.maskPII("1(234)567-890"));         
console.log(masker.maskPII("+86-(10)12345678"));      
