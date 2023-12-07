
public class SingletonPatterDemo {
	public static void main(String[] args) {
		
		//illegal construct
		//Compile Time Error: The constructor SingleObject() is not visible
		
		//SingleObject = new SingleObject();
		
		//Get the only object available
		SingleObject object = SingleObject.getInstance();
		
		//show the message
		object.showMessage();
	}

}
