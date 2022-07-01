import Bottleneck from "bottleneck";

const RATE_LIMIT = 1500;

const limiter = new Bottleneck({
    minTime: RATE_LIMIT,
    maxConcurrent: 1
})

limiter.on('failed', async (error, jobInfo) => {
    if (jobInfo.retryCount < 10) {
        return RATE_LIMIT + (jobInfo.retryCount * 100)
    }
})

export { limiter };
