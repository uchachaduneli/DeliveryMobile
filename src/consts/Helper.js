import AsyncStorage from "@react-native-async-storage/async-storage";

export function storeUserData(userObj) {
    console.log("Started Storing User Data");
    try {
        AsyncStorage.setItem("user_id", JSON.stringify(userObj.user.id)); //JSON.stringify(decoded));
        AsyncStorage.setItem("data", JSON.stringify(userObj));
        AsyncStorage.setItem("user_desc", JSON.stringify(userObj.sub)); //JSON.stringify(decoded));
        AsyncStorage.setItem("user_warehouse", JSON.stringify(userObj.user.warehouseId));
        AsyncStorage.setItem("user_roles", JSON.stringify(userObj.roles));
        console.log(
            "stored \n user_id",
            JSON.stringify(userObj.user.id) + " \n user_desc",
            JSON.stringify(userObj.sub) + " \n user_warehouse",
            JSON.stringify(userObj.user.warehouseId) + " \n user_roles",
            JSON.stringify(userObj.roles)
        );
        return true;
    } catch (e) {
        console.log(e);
        // console.log("CANT STORE USER DATA - " + JSON.stringify(e));
        // return false;
    }
}

export async function getUserDataByKey(key) {
    let res;
    await AsyncStorage.getItem(key, (error, result) => {
        res = result; //JSON.stringify(result);
    });
    return res;
}

export async function clearAllStorageData() {
    await AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys));
}
