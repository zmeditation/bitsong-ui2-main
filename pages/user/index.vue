<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useWalletStore from "~~/store/wallet";

const { isLoggedIn, address } = storeToRefs(useWalletStore());
const { push } = useRouter();
if (isLoggedIn.value) {
  push(`/user/${address.value}`);
} else {
  push("/");
}
</script>
