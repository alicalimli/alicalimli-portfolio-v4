import Image from "next/image";

export const DATA_NEWSLETTERS = [
  {
    id: "2",
    content: (
      <main className="my-6">
        <header className="text-center flex flex-col ">
          <h2 className="scroll-m-20 text-xl sm:text-2xl mt-2 font-semibold tracking-tight first:mt-0">
            You have to code or build SOMETHING
          </h2>

          <p className="text-sm sm:text-xl text-muted-foreground ">
            If you want to improve as a developer, this is the way.
          </p>

          <div className="relative h-[15rem] sm:h-[20rem] mt-5 mb-8 rounded-[12px] overflow-hidden w-full p-8">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fnewsletter-banner.webp?alt=media&token=8689ca29-04ad-410e-a9e9-552a3c7fbe7c"
              fill
              className="object-cover"
              alt="my first day tweet"
            />
          </div>
        </header>

        <main className="leading-7 text-sm sm:text-lg flex flex-col gap-4  text-white/85 px-6 sm:px-8">
          <p>
            The most common questions I get is how do I get better at something
            whether its JavaScript, React or any other tools out there.
          </p>

          <p>The answer would always be the same.</p>

          <p>Code something.</p>

          <p>Build your own projects or contribute to Open Source projects.</p>

          <p>
            You have to use the knowledge from the crash courses you’ve watched
            in order for you to actually learn it and deepen your knowledge
            about that specific tool you are currently learning.
          </p>

          <p>
            Watching alone is just not enough if you want to really learn
            something and become good with it.
          </p>

          <p>
            So yeah go out there, build something or start contributing to cool
            projects!
          </p>

          <p>
            Just code something, its challenging at first but that’s how we grow
            as developers.
          </p>

          <p>
            Before doing that make sure you already grasp the basics of the tool
            you are currently trying to get better at.
          </p>

          <p>That’s it for now.</p>

          <p>
            Thanks for reading, <br /> Ali
          </p>
        </main>
      </main>
    ),
  },
  {
    id: "1",
    content: (
      <main className="my-6">
        <header className="text-center flex flex-col ">
          <h2 className="scroll-m-20 text-xl sm:text-2xl mt-2 font-semibold tracking-tight first:mt-0">
            Easiest way to build an online presence
          </h2>

          <p className="text-sm sm:text-xl text-muted-foreground">
            I started mine by doing this.
          </p>

          <div className="relative h-[15rem] sm:h-[20rem] mt-5 mb-8 rounded-[12px] overflow-hidden w-full p-8">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fnewsletter-banner.webp?alt=media&token=8689ca29-04ad-410e-a9e9-552a3c7fbe7c"
              fill
              className="object-cover"
              alt="my first day tweet"
            />
          </div>
        </header>

        <section className="leading-7 text-sm sm:text-lg flex flex-col gap-4  text-white/85 px-6 sm:px-8">
          <p>As a developer,</p>

          <p>
            Having an Online Presence is super beneficial, especially in the
            long term.
          </p>

          <p>
            And the easiest way to start building yours is to share your
            learning progress.
          </p>

          <p>
            Developers always have something that they have been learning,
            right?
          </p>

          <p>
            Just by sharing it, you can easily build your online presence,
            little by little.
          </p>

          <p>Here’s an example of me on my first day:</p>

          <Image
            src="https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Ffirst-day.webp?alt=media&token=6fb167cd-7a42-452d-9bf0-1df7e570d274"
            className="rounded-lg"
            width={500}
            height={500}
            alt="my first day tweet"
          />

          <p>
            Same thing you can do with the project you have been building to
            practice.
          </p>

          <p>Share its progress.</p>

          <p>Here’s an example:</p>

          <Image
            src="https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fbuild-in-public.webp?alt=media&token=0724b336-fe24-470d-9139-1e6034217f12"
            className="rounded-lg"
            width={500}
            height={500}
            alt="my first day tweet"
          />

          <p>The great thing about this?</p>

          <p>You are going to receive feedback from other developers.</p>

          <p>And this feedback would help a lot in your journey.</p>

          <p>At the beginning, no one might engage with your posts,</p>

          <p>But don’t get discouraged, that’s normal.</p>

          <p>Once you start engaging in the community and make friends,</p>

          <p>People would start engaging with you, especially your friends.</p>

          <p>Whenever you are ready,</p>

          <p>
            I’d love to see you make your first post about this, so feel free to
            mention me when you can :)
          </p>

          <p>
            By the way, I would recommend you to start #100DaysOfCode Challenge
            on Twitter/X where you would start documenting your journey for 100
            days straight. (Break days are fine)
          </p>

          <p>That’s it for now.</p>

          <p>
            Thanks for reading, <br /> Ali
          </p>
        </section>
      </main>
    ),
  },
];
