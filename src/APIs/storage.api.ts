export class Storage<T> {
	private object: T;
	private objectNameInStorage: string;

	constructor(objectName: string) {
		this.object = JSON.parse(localStorage.getItem(objectName));
		this.objectNameInStorage = objectName;
	}

	public set(property: string, value: unknown) {
		this.object[property] = value;
		localStorage.setItem(
			this.objectNameInStorage,
			JSON.stringify(this.object)
		);
	}

	public getObject() {
		return this.object;
	}

	public writeObject(newObject: T) {
        this.object = newObject;
		localStorage.setItem(
			this.objectNameInStorage,
			JSON.stringify(newObject)
		);
	}

    // public replaceObject(newObject: T) {
    //     this.object = newObject;
    //     localStorage.setItem(
	// 		this.objectNameInStorage,
	// 		JSON.stringify(this.object)
	// 	);
    // }

}
