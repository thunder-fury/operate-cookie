export class OperateCookie {
  constructor () {}
  add(key: string, value: string, maxAge: number | null): void {
    let domain: string = document.domain
    let cookie = `${key}=${value};domain=${domain};path=${location.pathname};`;
    if(maxAge != null) {
      cookie += 'max-age=${maxAge}';
    }
    document.cookie = cookie;
  }
  get(key: string): string | null {
    const arr: any = new Object;
    if (document.cookie != '') {
      let tmp: string[] = document.cookie.split(';');
      for (let i = 0; i < tmp.length; i++) {
        let data: string[] = tmp[i].trim().split('=');
        arr[data[0]] = decodeURIComponent(data[1]);
        if (key === data[0]) {
          return decodeURIComponent(data[1]);
        }
      }
    }
    return null;
  }
  addParms(): void {
    const parms:any = new Object();
      const pair: string[] = location.search.substring(1).split('&');
      pair.forEach((p: string) => {
        let kv: string[] = p.split('=');
        parms[kv[0]] = kv[1];
        const parmsKey: string = kv[0];
        this.add(parmsKey, parms[parmsKey], 360);
      });
  }
  remove(key: string): void {
    let maxAge: number = 0;
    document.cookie = `${key}=;max-age=${maxAge}`;
  }
}
