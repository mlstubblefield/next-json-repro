import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
    const response = NextResponse.next()
    response.cookies.set('hello', _request.url.toString())
    return response
}
