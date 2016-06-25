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
			int modelcode = 0;
			String modelname = null;
			int modelprice = 0;
			ArrayList list = null;
			
			// 1. 파일 읽어 오기
			String filePath = "ErrorHtmlSample1.html"; // path+fileName
	//		BufferedReader in = new BufferedReader(new FileReader(filePath));
			
			BufferedReader in = new BufferedReader(new FileReader("ErrorHtmlSample1.html"));
			String s;
				while((s= in.readLine()) != null){
					String[] split = s.split("\t");
					modelcode = Integer.valueOf(split[0]);
					modelname = split[1];
					modelprice = Integer.valueOf(split[2]);
	
					list.add(new Model(modelcode, modelname, modelprice));
				}
				
				in.close();
			
			String inputData1 = "<html><head></head><body></body></html>";
			String inputData2 = "<html><head></head><body></body></html>";
			String outputData = "";
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.exit(1);
		}
		// 4. 파일 쓰기
//		System.out.println(list.);
		
	}
	
	

}
