import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: 'notifications',
    default: selector({
        key: "notificationsAtomSelector",
        get: async () => {
            // Artificaial delay
            // await new Promise(r => setTimeout(r,5000));
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
});

export const sumSelector = selector({
        key: 'sumSelector',
        get: ({ get }) => {
            const allnetworkCount = get(notifications);
            return allnetworkCount.network + allnetworkCount.jobs + allnetworkCount.messaging + allnetworkCount.notifications;
        }
    })