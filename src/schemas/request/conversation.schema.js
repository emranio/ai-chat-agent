import s from "fluent-json-schema";

export default s.object()
    .prop("siteId", s.string()).required()
    .prop("categoryId", s.string())
    .prop("serviceId", s.string())
    .prop("openAIKey", s.string())
    .prop("visitorUniqueId", s.string())
    .prop("visitorEmail", s.string().format('email')).required()
    .prop("visitorName", s.string().minLength(4).maxLength(40)).required()
    .prop('realTimeServiceInfo', s.array()
        .items(
            s.object()
                .prop('serviceId', s.string()).required()
                .prop('serviceTitle', s.string()).required()
                .prop('shortDesc', s.string()).required()
                .prop('availableDates', s.string()).required()
        )
    ).required()
    .prop('startDateTime', s.string()).required()
    .prop('currentDateTime', s.string()).required()
    .prop('oldConversations', s.array()
        .items(
            s.object()
                .prop('startDateTime', s.string()).required()
                .prop('Mgs', s.object()
                    .prop('bot', s.string())
                    .prop('visitorName', s.string())
                    .prop('visitorMessage', s.string())
                )
        )
    )
    .prop('Mgs', s.object()
        .prop('bot', s.string())
        .prop('visitorName', s.string())
        .prop('visitorMessage', s.string())
    ).required();