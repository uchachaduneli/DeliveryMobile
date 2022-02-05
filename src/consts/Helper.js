import AsyncStorage from "@react-native-async-storage/async-storage";

export function storeUserData(userObj) {
    console.log("Started Storing User Data");
    AsyncStorage.setItem("user_id", JSON.stringify(userObj.user.id)); //JSON.stringify(decoded));
    AsyncStorage.setItem("user_desc", JSON.stringify(userObj.sub)); //JSON.stringify(decoded));
    AsyncStorage.setItem(
        "user_warehouse",
        JSON.stringify(userObj.user.warehouseId)
    );
    AsyncStorage.setItem("user_roles", JSON.stringify(userObj.roles));
    console.log(
        "stored \n user_id",
        JSON.stringify(userObj.user.id) + " \n user_desc",
        JSON.stringify(userObj.sub) + " \n user_warehouse",
        JSON.stringify(userObj.user.warehouseId) + " \n user_roles",
        JSON.stringify(userObj.roles)
    );
    return true;
}

export async function getUserDataByKey(key) {
    let res;
    await AsyncStorage.getItem(key, (error, result) => {
        res = result; //JSON.stringify(result);
    });
    return res;
}
