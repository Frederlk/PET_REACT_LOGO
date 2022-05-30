import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import useVkInfo from "../../services/useVkInfo";
import setContent from "../utils/setContent";
import VkGroupPerson from "./VkWidgetMember";

const VkWidget = ({ className, groupId }) => {
    const { process, setProcess, getGroup, clearError } = useVkInfo();
    const [group, setGroup] = useState(null);

    useEffect(() => {
        updateGroup();
    }, [groupId]);

    const updateGroup = () => {
        clearError();
        if (!groupId) {
            return;
        }
        getGroup(groupId)
            .then(onGroupLoaded)
            .then(() => setProcess("confirmed"));
    };

    const onGroupLoaded = (group) => {
        setGroup(group);
    };

    return <>{setContent(process, View, group)}</>;
};

const View = ({ data }) => {
    const { id, name, screen_name, photo_50, members_count } = data;
    function declOfNum(number, words) {
        const formatNum = (number) => number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
        return (
            formatNum(number.toString()) +
            " " +
            words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]]
        );
    }
    const link = `https://vk.com/${screen_name}`;
    const members = declOfNum(members_count, ["участник", "участники", "участников"]);

    return (
        <a href={link} target="_blank" rel="noreferrer" className="vk-widget">
            <div className="vk-widget__top">
                <div className="vk-widget__icon">
                    <img src={photo_50} alt={name} />
                </div>
                <div className="vk-widget__icon">
                    <img src={images.socialIcons.vkSoclial2} alt="Иконка Vkontakte" />
                </div>
            </div>
            <div className="vk-widget__count">{members}</div>
            <div className="vk-widget__body">{<VkGroupPerson groupId={id} />}</div>
        </a>
    );
};

export default VkWidget;
