const blogsdat = [
    {
        name: "Timelapse ⏰ | HackTheBox",
        link: "https://systemweakness.com/timelapse-hackthebox-c407decbefca",
        image: "https://miro.medium.com/max/1400/1*EhZdWEjQK6La9iXOONffWA.png"
    },
    {
        name: "Mr Robot CTF | TryHackMe",
        link: "https://systemweakness.com/mr-robot-ctf-tryhackme-a82129fb356f",
        image: "https://miro.medium.com/max/1400/1*JxS2ahDMFmYwSrNmKFYtCA.jpeg"
    },
    {
        name: "Buffer Overflow Prep",
        link: "https://systemweakness.com/buffer-overflow-prep-tryhackme-6ec0573f3125",
        image: "https://miro.medium.com/max/1400/1*hOnErZwm27G0SBD62h15Bw.png"
    },
    {
        name: "Paper 📃 | HackTheBox",
        link: "https://systemweakness.com/paper-hackthebox-f2e5a735b42e",
        image: "https://miro.medium.com/max/1400/1*OoGJUX5Ki5dqWq8cbNkG1Q.png"
    },
    {
        name: "Internal ⚡ | TryHackMe",
        link: "https://systemweakness.com/internal-tryhackme-c2c1939b7c92",
        image: "https://miro.medium.com/max/1400/1*5kwfdCcsLDSt5rXf7gttPg.png"
    },
    {
        name: "Daily Bugle | TryHackMe",
        link: "https://systemweakness.com/daily-bugle-tryhackme-74af31cbaf31",
        image: "https://miro.medium.com/max/1400/1*hgYqtd0QtpW7j94co8DtNg.png"
    },
    {
        name: "Alfred 🦇 | TryHackMe",
        link: "https://systemweakness.com/alfred-tryhackme-d6f81484300f",
        image: "https://miro.medium.com/max/1400/1*8Uaxsmh5stTo4ieMN30_Tw.png"
    },
    {
        name: "SkyNet | TryHackMe",
        link: "https://systemweakness.com/skynet-tryhackme-37016945b6b",
        image: "https://miro.medium.com/max/1400/1*JAet3LtpHLubm7un9BtoSg.png"
    },
    {
        name: "Lazy Admin | Walkthrough",
        link: "https://systemweakness.com/lazy-admin-tryhackme-walkthrough-e83b7cfd27d0",
        image: "https://miro.medium.com/max/1400/1*yIZXdSUh29gI8zD5InnyEA.png"
    },
    {
        name: "Agent-sudo | TryHackMe",
        link: "https://systemweakness.com/agent-sudo-tryhackme-44f365cade7d",
        image: "https://miro.medium.com/max/1400/1*riBPgsL0NAOfbQT0r9dd8A.png"
    },
    {
        name: "Responder 🚨 | HackTheBox",
        link: "https://systemweakness.com/responder-hackthebox-walkthrough-f5231615627f",
        image: "https://miro.medium.com/max/1400/1*r1GKwekVHaJdgGtwLOO-WA.png"
    },
    {
        name: "Attacking Kerberos | TryHackMe",
        link: "https://medium.com/@arunjngra89/attacking-kerberos-tryhackme-6c9ecf90e5c6",
        image: "https://miro.medium.com/max/1400/1*oCcJYzdBtWnNHmBGF2G3mQ.png"
    },
    {
        name: "Bounty Hacker | TryHackMe",
        link: "https://systemweakness.com/bounty-hacker-tryhackme-3687444b4b47",
        image: "https://miro.medium.com/max/1400/1*dZsHLqY73P4XKk4Z71ErTQ.png"
    },
    {
        name: "Simple CTF | TryHackMe",
        link: "https://systemweakness.com/simple-ctf-tryhackme-659d2cf71e8e",
        image: "https://miro.medium.com/max/1400/1*LPHfP0afh5F4VjprWdvxCg.png"
    },
    {
        name: "Attacktive Directory | TryHackMe",
        link: "https://medium.com/system-weakness/attacktive-directory-tryhackme-b3801a67b97f",
        image: "https://miro.medium.com/max/1400/1*Y50kC1Jca47vwvnIJG2x7Q.png"
    },
    {
        name: "Root Me | TryHackMe",
        link: "https://systemweakness.com/root-me-tryhackme-walkthrough-b844f2f83173",
        image: "https://miro.medium.com/max/1400/1*Wan2jWijZ-P4owpnFgf3Tg.png"
    },
    {
        name: "Steel Mountain ⛰ | TryHackMe",
        link: "https://medium.com/system-weakness/steel-mountain-tryhackme-walkthrough-552021de9159",
        image: "https://miro.medium.com/max/1260/1*8emJlUMI-XxE0LYFRd5j_Q.png"
    },
    {
        name: "Blue 🌀 | TryHackMe",
        link: "https://medium.com/system-weakness/blue-tryhackme-walkthrough-1154ab347632",
        image: "https://miro.medium.com/max/1260/1*bA-rgLMOFFdRQlCZ5xsgcg.png"
    },
    {
        name: "Archetype | HackTheBox",
        link: "https://medium.com/system-weakness/archetype-hackthebox-walkthrough-be99a1fba8ea",
        image: "https://miro.medium.com/max/1260/1*YIPL7DM4kMJ-zYxZucmdfQ.png"
    },
    {
        name: "Basic Pentesting | TryHackMe ",
        link: "https://medium.com/system-weakness/basic-pentesting-tryhackme-walkthrough-b27fbe4b3dd",
        image: "https://miro.medium.com/max/1400/1*MxlTohLDbpKB7HSqpBAjAQ.png"
    },
    {
        name: "Pickle Rick | TryHackMe",
        link: "https://medium.com/system-weakness/pickle-rick-tryhackme-walkthrough-401aeb4acc74",
        image: "https://miro.medium.com/max/1400/0*dsWStS-NHKNCkk3i.jpg"
    },
    {
        name: "Why I shifted to Cyber Security ?",
        link: "https://medium.com/@arunjngra89/why-i-shifted-to-cyber-security-4bb4579e5f42",
        image: "https://miro.medium.com/max/1400/1*au87kLkSfKDufF8ijGCzVA.jpeg"
    }
]
export default blogsdat;