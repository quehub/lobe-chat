import Keycloak from 'next-auth/providers/keycloak';

import { authEnv } from '@/config/auth';

const provider = {
  id: 'keycloak',
  provider: Keycloak({
    authorization: { params: { scope: 'openid email profile' } },
    clientId: authEnv.KEYCLOAK_CLIENT_ID,
    clientSecret: authEnv.KEYCLOAK_CLIENT_SECRET,
    issuer: authEnv.KEYCLOAK_ISSUER, // https://my-keycloak-domain.com/realms/My_Realm
    // TODO(NextAuth): map unique user id to `providerAccountId` field
    // profile(profile) {
    //   return {
    //     email: profile.email,
    //     image: profile.picture,
    //     name: profile.name,
    //     providerAccountId: profile.user_id,
    //   };
    // },
  }),
};

export default provider;
