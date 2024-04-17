'use server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET (){
    try{
    // Does file exist
    const { file } = this.params;
    const filePath = join(process.cwd(), 'public', file);
        
    response = await readFile(filePath);
    if(response){
        console.log("File exists");
        return this.send(200, { exists: true });
    }
    
    
} catch (error) {
        console.error("Error checking file existence:", error);
    }

}