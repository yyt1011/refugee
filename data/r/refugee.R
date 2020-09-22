df19 <- read.csv("MX - Arrivals by Destination and Nationality.csv")
df19 <- df19 %>% select(-start_date, -end_date)
df19_st <- df19 [1:1679, ]
df19_na <- df19[1680:3358, ]
colnames(df19_na)[colnames(df19_na) %in% c('dest_state','state_total_received','nationality')] <- c('nationality','nationality_total','dest_state')
write.csv(df19_st, "arrivals_by_destination.csv", row.names = FALSE)
write.csv(df19_na, "arrivals_by_nationality.csv", row.names = FALSE)

df18 <- read.csv("MX - Arrivals by Destination and Nationality (1).csv")
df18 <- df18 %>% select(-start_date, -end_date)
df18_st <- df18 [1:1598, ]
df18_na <- df18[1599:3196, ]
colnames(df18_na)[colnames(df18_na) %in% c('dest_state','state_total_received','nationality')] <- c('nationality','nationality_total','dest_state')
write.csv(df18_st, "arrivals_by_destination18.csv", row.names = FALSE)
write.csv(df18_na, "arrivals_by_nationality18.csv", row.names = FALSE)

df17 <- read.csv("MX - Arrivals by Destination and Nationality (2).csv")
df17 <- df17 %>% select(-start_date, -end_date)
df17_st <- df17 [1:2381, ]
df17_na <- df17[2382:4762, ]
colnames(df17_na)[colnames(df17_na) %in% c('dest_state','state_total_received','nationality')] <- c('nationality','nationality_total','dest_state')
write.csv(df17_st, "arrivals_by_destination17.csv", row.names = FALSE)
write.csv(df17_na, "arrivals_by_nationality17.csv", row.names = FALSE)

df16 <- read.csv("MX - Arrivals by Destination and Nationality (3).csv")
df16 <- df16 %>% select(-start_date, -end_date)
df16_st <- df16 [1:3461, ]
df16_na <- df16[3462:6922, ]
colnames(df16_na)[colnames(df16_na) %in% c('dest_state','state_total_received','nationality')] <- c('nationality','nationality_total','dest_state')
write.csv(df16_st, "arrivals_by_destination16.csv", row.names = FALSE)
write.csv(df16_na, "arrivals_by_nationality16.csv", row.names = FALSE)

df15 <- read.csv("MX - Arrivals by Destination and Nationality (4).csv")
df15 <- df15 %>% select(-start_date, -end_date)
df15_st <- df15 [1:2844, ]
df15_na <- df15[2845:5688, ]
colnames(df15_na)[colnames(df15_na) %in% c('dest_state','state_total_received','nationality')] <- c('nationality','nationality_total','dest_state')
write.csv(df15_st, "arrivals_by_destination15.csv", row.names = FALSE)
write.csv(df15_na, "arrivals_by_nationality15.csv", row.names = FALSE)

na <- rbind(df15_na, df16_na)
na <- rbind(na, df17_na)
na <- rbind(na, df18_na)
na <- rbind(na, df19_na)
write.csv(na, "Total_by_nationality.csv", row.names = FALSE)

st <- rbind(df15_st, df16_st)
st <- rbind(st, df17_st)
st <- rbind(st, df18_st)
st <- rbind(st, df19_st)
write.csv(st, "Total_by_destination.csv", row.names = FALSE)
