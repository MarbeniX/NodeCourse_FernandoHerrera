import winston, { format, transports, createLogger } from "winston";

const { combine, timestamp } = format;

const logger = createLogger({
    level: "info",
    format: combine(timestamp(), format.json()),
    // defaultMeta: { service: "user-service" },
    transports: [
        //
        // - Write all logs with importance level of `error` or higher to `error.log`
        //   (i.e., error, fatal, but not other levels)
        //
        new transports.File({ filename: "error.log", level: "error" }),
        //
        // - Write all logs with importance level of `info` or higher to `combined.log`
        //   (i.e., fatal, error, warn, and info, but not trace)
        //
        new transports.File({ filename: "combined.log" }),
    ],
});
logger.add(
    new transports.Console({
        format: format.simple(),
    })
);

interface Logger {
    log: (message: String) => void;
    error: (message: String) => void;
}

export const buildLogger = (service: String): Logger => {
    return {
        log: (message: String) => {
            logger.log("info", { message, service });
        },
        error: (message: String) => {
            logger.error("error", { message, service });
        },
    };
};
