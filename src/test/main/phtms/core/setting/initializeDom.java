package phtms.core.setting;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class initializeDom {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			//0. 초기값 확인하기
			int modelcode;
			String modelname;
			int modelprice;
			ArrayList list;
			
		// 1. 파일 읽어 오기
		String filePath = "ErrorHtmlSample1.html"; // path+fileName
		BufferedReader in = new BufferedReader(new FileReader(filePath));
		String s;
			while((s= in.readLine()) != null){
				String[] split = s.split("\t");
				modelcode = Integer.valueOf(split[0]);
				modelname = split[1];
				modelprice = Integer.valueOf(split[2]);
			}
			
			list.add(new Model((modelcode, mnodelname, modelprice));
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 4. 파일 쓰기
		
		
	}
	
	

}
