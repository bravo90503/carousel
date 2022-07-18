import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  // attdemoacct_22675@yopmail.com
  // 1x/SUzm9gMkXTDUYijazuQ==
   // private token ='Ca594/et5YaqVUVVZbpVOerjK0thzkbqPlhNNfWcOEIa0H7cTYysaLziWOogqavNJoReQfBxg7+3Dir4Mt2fbYWMzTxK8YdEr75BcoNzr6Am4g8JyPKUNzxsq3ZAKJm5Z3a7iRF+01yIRsUmjXAFtFQ/5W9pnwhK8BdKzUJD9+ixD10XvpOLbHFyIk3Fi4Td+skQzNaqht597iNMxfDdmLhIC7CQnEPrq3gtwD4MEqi0HUFTPizNIBdJ+k6NrsbJ5GmbolS6KsUdqNT8esXXLgsQZB8KeWlQG+zZYVKfGKpSBMTKM/kpURSV46DPnPPecHJuj2wYFAXkrkGrFVz4nW7+KHd9X/ax/xH0HrrXLGT8yr4d3Fxg39xhy7z+H5HahouZ4KedCgkL5hAvdji6jonS6usZWAPEsEBmJoSLLq5T2lMjn+lb2yQ8ZlMD7+sPEtP3cCWmIQ3qcYj842BfRffuRf0Nc/nBBPCcaMsGcsEsTpI6It1cRRnSJa1gnmo0ZkesnYmkurl5+sguJ6J22A9DF2PQWmcTXU9pZ2Zf6IAZzgkmtaEY8YyD/9qZxEUiMGAXVyBbuPzXnlqMiRavGN6Cs/aeljSoTjxOXx66DTWzflzLq6AhS3oScL+s2dAdFK4+K2kzpIpRqq/DSyKfGwRAP3VbJriM2aubTarPMy/tRfLYL/1Wl3k/cu14nLJZ9sYUd7g4YUBOesMz8hvTD511XNQ75G/1YJ03fQhx3FATtJdr0IfdIxhRtEbF0zOCQajArMb7T1MtHfFqg8z4yArJ+DVNOfK2pIsLcTdrmnrBEfwPDQ2WVbLtLfXJrnX+v7wG7Os5Q3yOw98sALKq837Z263MSOo8hfOZoKE6bHn3foea5vrBine/v0O4EzD/vinJD3iRx2Qka61tWoGhk4stp75dAHg3FqPehn/s2nzAcLRGMclshuz3Oj379nQ2PfPoYp/h29hS1c5I5+llPcbe6BIjTCbgbVh90Z2AXMQsb1MMVKZHbfz7zerTHUbJE920hcenbf7iTMmewNlEAv8Th7VV1nSObF4xHBAyVds6gdRHmS6Vjdk1neKRr6kUEnB0pKLb5w3BpRSUAB5jEzdScrW8dlcT4+g3AOqSJZjHf3fu5W+W0+0hdH6W32qpSgZ1T5PRfHZ2Pb1C7dMRFR4wZXJVHQ2OetJyQueB3LiwJQ6N28tjl+qlBRuqukVUXKIWIpcb3eAIN1Y2Or0j56pqxTUIVK6GX00zCejZBnI=.0Ze1rbiH1ABxcIqu0eNbi3XGcigr8QrGvzuX1NcO1T8=';
  // attdemoacct_18312@yopmail.com
  // p97Z7IellsbtdJPGG9VG2g==
  private token ='BB7BuXLbRbaKnZGcTXVZ8awgyR0vpswWgf61jyoFusvGqiM+ZZkdYWwAbe8NzYVduxvt+VN+BtWahna24XGHG9TkD+c2n+1SL8mxMYE47ZZf1wdLL5tr7YL2jmMpSkb1/n+ll+qMs1QN4QLL1MzDXswre821l801F47v3xBXPpMkOJNWVEbnbMkEi4BMzESJkad9gVOOZHufcdbFT/xVmPGVznf7FyP1yxSbyewQ3fjazRBS9dl1N+Kow7qNXvULokBkNRJsfqBuD9UJ3kWuIWfsktizkXKQF7X4z2sTTKrWnAVZGgI2hXCpXF2MiXZLRcmLdfAJ1Z/E38MM/fZ355yg7zagIrY+mxLozoTuzVVoW2L27RLQeMHCogrTrOLg8Q2hERCxlkf98dCFoBltf4fmbQzKrRzM+gq/x697R+H5GQ2/gFfJzkvVa3FjXJM0NapU5IuQuGbTQtyToIr1Uwh0qS+OVgL8yokaz2WyCUgYNshrsEiswYf1qfYptpfcZSS8iAdBli7Tg8JfS6Azf1WPzlL3vK7ItGJsEDwYqcGVkGkOz2ZlL0PV6SGOnV3R2qXYZKe903YTKvRcWN0r9skjJfAjjqP6C0Gh2lv1WuFU8iwWDi8P1xO01Nx8RAJQ7DIbhibqdvcoQkbsHRXjKPbczBVeDcVH/DmBrmYslu+I6qkUCTaaU5BK2hY3amNKwFq/lr7y96A/uX+U2JMHvrTUpUXFKs2bWyzmguZmW7YRsap7CrAWRxiwWEqcUJehPqOiFwiDrhdpT3WRbSO3axWLvdofWbJPJd0lqPucJm9hcvKQmPq/pqfLWfmfSpW1exnlxkU5cRpHRL/zUSEZdW0bdqgqBAaopNtvUHjx2QVhCI53N9eg8Pd9Fs8Fdcin3lO2OHMwVWVyy1hGC+dcwaY0uTnv2ijHNCGil/DRLMks+881NjZmg73Miz/iGLhiGlB/1M/1HKsSsW+W4GXpen2x9/ao/YovPGy6o2+r3vF+kdOyuFUZB+p8jWycPlZEnePE4bC8Qa12nyNk9/QkjYcAiG1u26PLxvxvjRmfDBfEC1rIX8GF/wBU1C5MeRBzJxvrhkWGiszkgYul9WRWOHfSI8bUyHMa+xjHADsXQwOgjcwPCEmVS+uvDDcgIRMSM9Bx7hV/BUFaVzhVRuS+LWrfHL9XK5pgcCI5wTZ/yQvekidR0ljlhkh+wxGn1YaH76BPlsQixXmJ1ScmFYnUIiB+eRTIFTbv+W7eYmRC6hU=.y+4CCshUwAPm+ffuzjtNH6NXsO9U2NLCKS9RhrnRXjQ='; 
  
  private token2='UD9Fdg38skzSed0uGZiDXUYQLCNgjKPVJLZq26hEMBVzQpbvHWk4tfAHVvyRwcTYvR0xjBWWqnt5faSYi6WED85VOmcLt/gDN39bLs95excxrctuqWr7HtNqyxINHHjjqO7XHWjt234BGjQkwMvHVr20QkROMkhNgTQ4WWXVo8dBCdhZAHXxEzYjpXO10UaXGP7gnSWbmrHB3fgm2SdblOgSkagB4YnZLkrGmMoBfOsw/1KePT4ZlA6dM/8F/iLV+QM2E1yDXpsemAA/4a81Y+BeEQ7cr/SUNEDQ/bkwWuhtFvvGCvDk1cjrM/bo2h2Q76r/QwYJgSCY+jtZMuz0zwZ/NuIpNQXfb+7nmLuMhSp/7TiUnpesTF8ubzcc8P/FEDecclsndIWjkmf9EOOYhulAKpfdla87JNIdF2yooIROH20qFu5OgPBbROtDl7c2hrVxQBHqVHllaAvhgoDGl+F+meG8GHI+FS2QCYVGnFZx39AZwIAjf+r3q9arqxLv67khQSrajW5WNPRL6dxJVp4Po2Vmq4N54YPReJ+rA4Q2veamSBDEoctKPScKKpWo013NAqFj0N3OjmbFHsZw8wyarhJJmKK4fGvcwP420h1Yos3kS9R0r3PMWGTgB/dqbZ45TQNNE8uD+4nonUOOrN9KQ252pIAjpb48G2ZYQcsYGF3ikHoZ8B8M2t5njWcqKzpgFSRP5sXOY39WltzJywtkb6XyO6tRzkCcZ1tMJ5Rf1WYAagj+phEwXoX0pV37J1onFnflBKTk9codem7uHxAg+HRJQpw6hOlWFg7CuIwDDZQ/V8mdtGWA1HDXTOrRF7ymNzPrr26bq3LNcLZGQQeIjgi9fg/gNcsi0itOirshzGlRiuXm+VUxa7qSjNvlRfoYBG+4WjJABg8GM1BL1XurSqOe3eyuvmqASsbeW+u/7p5qkW9jjZskomVKnfyMxYGk10oIhYVMU2AaR8Mr37W0D9OP7bEH88Faiz8k3Bt3UsWQbqZrsAFTgIT1aZD+KTpTwXfx9bt8Djeq2lQJnwZm/8KF6QBQyh7BUDF/2qT/54pSdLd+eq7H9nCBMPv+ohZ2GXfPe1vlSWrl3FdcaTxkW2Uh0ypeObt8kCWC47botKMjrrrH9MTfRQeAjUQUHhLVT8rESHNPRJ451UqSTR8E5PxIOC8Q66NlfFWpccHXMTLGJn3cOD6Q/mJvewiBJb3wEweJ/20eaLWlwAjIzMhCMT5+MSMNHshk4t0IeV0=.jnHeafVoQK28lbpflJndOLHgQrgzz07jBJy62oTYJqI=';
  constructor(private http: HttpClient) {

  }
  
  getRecommendationsProxy() {
    const profileID = 'fTBMOyk6pLz0oLkt6vhB5w=='
    console.log('getRecommendations invoked')
    const path: string = "/service/carousels/recently-watched?"
    const host: string = 'https://api.cld.dtvce.com/disc/edge/carousels/v1'
    let url: string = host + path
    let params: string = "clientContext=lat%3A34.06308975%2Clong%3A-118.17127373%2CdmaID%3A803_0%2CbillingDmaID%3A803%2CregionID%3AFSWHD%2CzipCode%3A91803%2CpkgCode%3ACinemax_Showtime_Starz_Hispanic-Todo%20Y%20Mas_HBO_DVR%20100%20hours_Gotta%20Have%20It&sectionId=63e82a5b-5d90-4c1e-bdd2-90074f7c9983&pageReference=MyTVReference&itemIndex=0&itemCount=30&v=1623096389182&userID=mia.calhoun.mummert@att.com"
    url += params + "&fisProperties=MOV:poster,320,180,dc%23SER:poster,320,180,dc%23SHO:poster,320,180,dc%23SPO:poster,320,180,dc%23EPI:keyframe-ci,320,180,dc%23bg-player,640,360%23bg-fplayer,1024,576%23NET:logo-player,120,90%23NET:logo-fplayer,120,90"
    const headers = new HttpHeaders()//
    .set('Authorization', 'Bearer ' + this.token)
    .set('X-AEG-Partner-Profile-ID', profileID)//
    .set('X-AEG-Profile-ID', 'default')//
    .set('X-AEG-Account-Token', '9h4E4eelTJVITYgKrFIpvnNzipM7UDB6-k-vMH5ba0I')
    .set('X-AEG-Service-Domain', 'ZULU')
    .set('X-AEG-Device-Type', 'mobile')
    .set('X-AEG-Device-ID', 'ios')
    .set('X-ATT-TransactionID', 'abcd')
    .set('X-AEG-Route-Offer', 'GREEN')
    return this.http.get(url, {
        headers: headers
    });
  }


  getRecommendationsProxy2() {
    const profileID = 'fTBMOyk6pLz0oLkt6vhB5w=='
    console.log('getRecommendations invoked')
    const path: string = "/service/carousels/recently-watched?"
    const host: string = 'https://api.cld.dtvce.com/disc/edge/carousels/v2'
    let url: string = host + path
    let params: string = "clientContext=lat%3A34.06308975%2Clong%3A-118.17127373%2CdmaID%3A803_0%2CbillingDmaID%3A803%2CregionID%3AFSWHD%2CzipCode%3A91803%2CpkgCode%3ACinemax_Showtime_Starz_Hispanic-Todo%20Y%20Mas_HBO_DVR%20100%20hours_Gotta%20Have%20It&sectionId=63e82a5b-5d90-4c1e-bdd2-90074f7c9983&pageReference=MyTVReference&itemIndex=0&itemCount=30&v=1623096389182&userID=mia.calhoun.mummert@att.com"
    url += params + "&fisProperties=MOV:poster,320,180,dc%23SER:poster,320,180,dc%23SHO:poster,320,180,dc%23SPO:poster,320,180,dc%23EPI:keyframe-ci,320,180,dc%23bg-player,640,360%23bg-fplayer,1024,576%23NET:logo-player,120,90%23NET:logo-fplayer,120,90"
    const headers = new HttpHeaders()//
    .set('Authorization', 'Bearer ' + this.token)
    .set('X-AEG-Partner-Profile-ID', profileID)//
    .set('X-AEG-Profile-ID', 'default')//
    .set('X-AEG-Account-Token', '9h4E4eelTJVITYgKrFIpvnNzipM7UDB6-k-vMH5ba0I')
    .set('X-AEG-Service-Domain', 'ZULU')
    .set('X-AEG-Device-Type', 'mobile')
    .set('X-AEG-Device-ID', 'ios')
    .set('X-ATT-TransactionID', 'abcd')
    .set('X-AEG-Route-Offer', 'GREEN')
    return this.http.get(url, {
        headers: headers
    });
  }
  getRecommendationsProxy2b() {
    const profileID = 'fTBMOyk6pLz0oLkt6vhB5w=='
    console.log('getRecommendations invoked')
    const path: string = "/service/carousels/recently-watched?"
    const host: string = 'https://api.cld.dtvce.com/disc/edge/carousels/v2'
    let url: string = host + path
    let params: string = "clientContext=lat%3A34.06308975%2Clong%3A-118.17127373%2CdmaID%3A803_0%2CbillingDmaID%3A803%2CregionID%3AFSWHD%2CzipCode%3A91803%2CpkgCode%3ACinemax_Showtime_Starz_Hispanic-Todo%20Y%20Mas_HBO_DVR%20100%20hours_Gotta%20Have%20It&sectionId=63e82a5b-5d90-4c1e-bdd2-90074f7c9983&pageReference=MyTVReference&itemIndex=0&itemCount=30&v=1623096389182&userID=mia.calhoun.mummert@att.com"
    url += params + "&fisProperties=MOV:poster,320,180,dc%23SER:poster,320,180,dc%23SHO:poster,320,180,dc%23SPO:poster,320,180,dc%23EPI:keyframe-ci,320,180,dc%23bg-player,640,360%23bg-fplayer,1024,576%23NET:logo-player,120,90%23NET:logo-fplayer,120,90"
    const headers = new HttpHeaders()//
    .set('Authorization', 'Bearer ' + this.token2)
    .set('X-AEG-Partner-Profile-ID', profileID)//
    .set('X-AEG-Profile-ID', 'default')//
    .set('X-AEG-Account-Token', '9h4E4eelTJVITYgKrFIpvnNzipM7UDB6-k-vMH5ba0I')
    .set('X-AEG-Service-Domain', 'ZULU')
    .set('X-AEG-Device-Type', 'mobile')
    .set('X-AEG-Device-ID', 'ios')
    .set('X-ATT-TransactionID', 'abcd')
    .set('X-AEG-Route-Offer', 'GREEN')
    return this.http.get(url, {
        headers: headers
    });
  }
  getRecommendations() {
    const profileID = 'fTBMOyk6pLz0oLkt6vhB5w=='
    console.log('getRecommendations invoked')
    const path: string = "/service/carousels/recently-watched?"
    const host: string = 'http://discovery-edge-carousels-1-31-0.awsw1.cld.dtvops.net'
    let url: string = host + path
    let params: string = "clientContext=lat%3A34.06308975%2Clong%3A-118.17127373%2CdmaID%3A803_0%2CbillingDmaID%3A803%2CregionID%3AFSWHD%2CzipCode%3A91803%2CpkgCode%3ACinemax_Showtime_Starz_Hispanic-Todo%20Y%20Mas_HBO_DVR%20100%20hours_Gotta%20Have%20It&sectionId=63e82a5b-5d90-4c1e-bdd2-90074f7c9983&pageReference=MyTVReference&itemIndex=0&itemCount=30&v=1623096389182&userID=mia.calhoun.mummert@att.com"
    url += params + "&fisProperties=MOV:poster,320,180,dc%23SER:poster,320,180,dc%23SHO:poster,320,180,dc%23SPO:poster,320,180,dc%23EPI:keyframe-ci,320,180,dc%23bg-player,640,360%23bg-fplayer,1024,576%23NET:logo-player,120,90%23NET:logo-fplayer,120,90"
    const headers = new HttpHeaders()//
    .set('X-AEG-Partner-Profile-ID', profileID)//
    .set('X-AEG-Profile-ID', 'default')//
    .set('X-AEG-Account-Token', '9h4E4eelTJVITYgKrFIpvnNzipM7UDB6-k-vMH5ba0I')
    .set('X-AEG-Service-Domain', 'ZULU')
    .set('X-AEG-Device-Type', 'mobile')
    .set('X-AEG-Device-ID', 'ios')
    .set('X-ATT-TransactionID', 'abcd')
    .set('X-AEG-Route-Offer', 'GREEN')
    return this.http.get(url, {
        headers: headers
    });
  }


  getRecommendations2() {
    const profileID = 'fTBMOyk6pLz0oLkt6vhB5w=='
    console.log('getRecommendations invoked')
    const path: string = "/service/carousels/recently-watched?"
    const host: string = 'http://discovery-edge-carousels-2-0-3.awsw1.cld.dtvops.net'
    let url: string = host + path
    let params: string = "clientContext=lat%3A34.06308975%2Clong%3A-118.17127373%2CdmaID%3A803_0%2CbillingDmaID%3A803%2CregionID%3AFSWHD%2CzipCode%3A91803%2CpkgCode%3ACinemax_Showtime_Starz_Hispanic-Todo%20Y%20Mas_HBO_DVR%20100%20hours_Gotta%20Have%20It&sectionId=63e82a5b-5d90-4c1e-bdd2-90074f7c9983&pageReference=MyTVReference&itemIndex=0&itemCount=30&v=1623096389182&userID=mia.calhoun.mummert@att.com"
    url += params + "&fisProperties=MOV:poster,320,180,dc%23SER:poster,320,180,dc%23SHO:poster,320,180,dc%23SPO:poster,320,180,dc%23EPI:keyframe-ci,320,180,dc%23bg-player,640,360%23bg-fplayer,1024,576%23NET:logo-player,120,90%23NET:logo-fplayer,120,90"
    const headers = new HttpHeaders()//
    .set('X-AEG-Partner-Profile-ID', profileID)//
    .set('X-AEG-Profile-ID', 'default')//
    .set('X-AEG-Account-Token', '9h4E4eelTJVITYgKrFIpvnNzipM7UDB6-k-vMH5ba0I')
    .set('X-AEG-Service-Domain', 'ZULU')
    .set('X-AEG-Device-Type', 'mobile')
    .set('X-AEG-Device-ID', 'ios')
    .set('X-ATT-TransactionID', 'abcd')
    .set('X-AEG-Route-Offer', 'GREEN')
    return this.http.get(url, {
        headers: headers
    });
  }

  getGenerics() {
    const profileID = 'fTBMOyk6pLz0oLkt6vhB5w=='
    console.log('getGenerics invoked')
    const path: string = "/service/carousels/generic?/service/carousels/generic?"
    const host: string = 'http://discovery-edge-carousels-recommendations-generic-2.dev-int.aeg.cloud';
    let url: string = host + path
    //let params: string = "clientContext=lat%3A34.06308975%2Clong%3A-118.17127373%2CdmaID%3A803_0%2CbillingDmaID%3A803%2CregionID%3AFSWHD%2CzipCode%3A91803%2CpkgCode%3ACinemax_Showtime_Starz_Hispanic-Todo%20Y%20Mas_HBO_DVR%20100%20hours_Gotta%20Have%20It&sectionId=63e82a5b-5d90-4c1e-bdd2-90074f7c9983&pageReference=MyTVReference&itemIndex=0&itemCount=30&v=1623096389182&userID=mia.calhoun.mummert@att.com"
    let params: string ="clientContext=lat%3A34.06308975%2Clong%3A-118.17127373%2CdmaID%3A803_0%2CbillingDmaID%3A803%2CregionID%3AFSWHD%2CzipCode%3A91803%2CpkgCode%3ACinemax_Showtime_Starz_Hispanic-Todo%20Y%20Mas_HBO_DVR%20100%20hours_Gotta%20Have%20It&sectionId=0273861b-e23f-4c71-ab8a-a9f2e6ec64ee&pageReference=MyTVReference&itemIndex=0&itemCount=300&v=1623096389182&minCount=1"
    url += params + "&fisProperties=MOV:poster,320,180,dc%23SER:poster,320,180,dc%23SHO:poster,320,180,dc%23SPO:poster,320,180,dc%23EPI:keyframe-ci,320,180,dc%23bg-player,640,360%23bg-fplayer,1024,576%23NET:logo-player,120,90%23NET:logo-fplayer,120,90"
    //url += params;
    const headers = new HttpHeaders()//
    .set('X-AEG-Partner-Profile-ID', profileID)//
    .set('X-AEG-Profile-ID', 'default')//
    .set('X-AEG-Account-Token', '9h4E4eelTJVITYgKrFIpvnNzipM7UDB6-k-vMH5ba0I')
    .set('X-AEG-Service-Domain', 'ZULU')
    .set('X-AEG-Device-Type', 'mobile')
    .set('X-AEG-Device-ID', 'ios')
    .set('X-ATT-TransactionID', 'abcd')
    .set('X-AEG-Route-Offer', 'GREEN')
    return this.http.get(url, {
        headers: headers
    });
  }
}