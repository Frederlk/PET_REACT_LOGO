import React, { useEffect, useState } from "react";
import useVkInfo from "../../services/useVkInfo";
import setContent from "../utils/setContent";

const VkGroupPerson = ({ groupId }) => {
    const { process, setProcess, getMembers, clearError } = useVkInfo();
    const [members, setMembers] = useState([]);

    useEffect(() => {
        updateMembers();
    }, [groupId]);

    const updateMembers = () => {
        clearError();
        if (!groupId) {
            return;
        }
        setTimeout(() => {
            getMembers(groupId)
                .then(onMembersLoaded)
                .then(() => setProcess("confirmed"));
        }, 1000);
    };

    const onMembersLoaded = (members) => {
        setMembers(members);
    };

    return <>{setContent(process, View, members)}</>;
};

const View = ({ data }) => {
    return data.map(({ id, photo_50, first_name }, i) => {
        if (i > 7) return;
        return (
            <div key={id} className="vk-widget__person">
                <div className="vk-widget__img-ibg">
                    <img src={photo_50} alt={first_name} />
                </div>
                <div className="vk-widget__name">{first_name}</div>
            </div>
        );
    });
};

export default VkGroupPerson;
