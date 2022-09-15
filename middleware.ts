import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
    if(_request.url.toString().includes(".json")){
        return NextResponse.rewrite(new URL("/404landia", _request.url))
    }
}
