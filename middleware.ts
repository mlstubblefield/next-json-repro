import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
    const response = NextResponse.next()
    response.cookies.set('hello', _request.url.toString())
    response.cookies.set('hello', "new" + _request.url.toString())
    const url = _request.nextUrl.clone()
    if(url.pathname == "/"){
        url.pathname = "/somethingelse"
        return NextResponse.rewrite(url)
    }else{
        return response
    }
    
}
